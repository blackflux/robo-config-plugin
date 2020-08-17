const { describe } = require('node-tdd');
const objectScan = require('object-scan');
const get = require('lodash.get');
const path = require('path');
const yaml = require('yaml-boost');
const fs = require('smart-fs');
const expect = require('chai').expect;
const Joi = require('joi-strict');

describe('Testing serverless cf stack definitions', { cryptoSeed: 'seed' }, () => {
  let apiStack;
  let dataStack;
  let runner;
  let definedRoutes;
  before(() => {
    const loadStack = (stack) => yaml.load(
      path.join(__dirname, '..', 'serverless.wrapper.yml'),
      {
        stack,
        region: 'us-west-2',
        env: 'local'
      }
    );
    apiStack = loadStack('api');
    dataStack = loadStack('data');
    runner = (stack) => {
      const stackCf = { api: apiStack, data: dataStack }[stack];
      expect(
        fs.smartWrite(path.join(__dirname, 'sls-cf-stack', `$\{stack}.yml`), stackCf),
        'Stack cf updated. Please re-run.'
      ).to.equal(false);
    };
    definedRoutes = fs.smartRead(path.join(__dirname, 'sls-cf-stack-routes.yml'));
  });

  it('Testing api stack', () => {
    runner('api');
  });

  it('Testing data stack', () => {
    runner('data');
  });

  it('Testing stack http methods', () => {
    const methods = ['Get', 'Post', 'Put', 'Patch', 'Options', 'Head', 'Delete', 'Any'];
    const methodsUpper = methods.map((e) => e.toUpperCase());
    [apiStack, dataStack].forEach((stack) => {
      objectScan(['functions.*.events[*].http.method'], {
        filterFn: ({ value }) => {
          expect(value).to.be.oneOf(methodsUpper);
        }
      })(stack);
    });
  });

  it('Testing stack http parameters not explicitly defined', () => {
    expect(
      objectScan(['functions.*.events[*].http.request.parameters'])(apiStack),
      'Parameters should not be explicitly defined.'
    ).to.deep.equal([]);
  });

  it('Testing authorizer on routes', () => {
    const routes = objectScan(['functions.*.events[*].http'], {
      filterFn: ({ key, value, context }) => {
        context[key[1]] = value.authorizer !== 'aws_iam';
      }
    })(apiStack, {});
    expect(routes).to.deep.equal(definedRoutes);
  });

  it('Testing function handlers', () => {
    // eslint-disable-next-line global-require, import/no-dynamic-require
    const handlers = require(path.join(__dirname, '..', 'src', 'handler'));
    objectScan(['functions.*'], {
      filterFn: ({ key }) => {
        const fn = key[1];
        const handler = get(apiStack, `functions.$\{fn}.handler`);
        expect(handler).to.equal(`lib/handler.$\{fn}`);
        expect(typeof handlers[fn]).to.equal('function');
      }
    })(apiStack);
  });

  it('Testing memorySize and timeout are explicitly set', () => {
    const schema = Joi.number().integer();
    const { functions } = apiStack;
    Object.values(functions).forEach((f) => {
      expect(Joi.test(f.memorySize, schema)).to.equal(true);
      expect(Joi.test(f.timeout, schema)).to.equal(true);
    });
  });
});
