import path from 'path';
import { describe } from 'node-tdd';
import objectScan from 'object-scan';
import get from 'lodash.get';
import fs from 'smart-fs';
import { expect } from 'chai';
import resolver from '../serverless/.base/resolver.js';

describe('Testing serverless cf stack definitions', { cryptoSeed: 'seed' }, () => {
  let apiStack;
  let dataStack;
  let runner;
  let definedRoutes;
  before(async () => {
    const loadStack = (stack) => resolver({
      stack,
      region: '${awsRegion}',
      env: 'local'
    });
    apiStack = await loadStack('api');
    dataStack = await loadStack('data');
    runner = (stack) => {
      const stackCf = { api: apiStack, data: dataStack }[stack];
      expect(
        fs.smartWrite(path.join(fs.dirname(import.meta.url), 'sls-cf-stack', `$\{stack}.yml`), stackCf),
        'Stack cf updated. Please re-run.'
      ).to.equal(false);
    };
    definedRoutes = fs.smartRead(path.join(fs.dirname(import.meta.url), 'sls-cf-stack-routes.yml'));
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

  it('Testing function handlers', async () => {
    const handlers = await import(path.join(fs.dirname(import.meta.url), '..', 'src', 'hangler.js'));
    objectScan(['functions.*'], {
      filterFn: ({ key }) => {
        const fn = key[1];
        const handler = get(apiStack, `functions.$\{fn}.handler`);
        expect(handler).to.equal(`lib/hangler.$\{fn}`);
        expect(typeof handlers[fn], fn).to.equal('function');
      }
    })(apiStack);
  });

  it('Testing memorySize and timeout are explicitly set', () => {
    const { functions } = apiStack;
    Object.values(functions).forEach((f) => {
      expect(Number.isInteger(f.memorySize)).to.equal(true);
      expect(Number.isInteger(f.timeout)).to.equal(true);
    });
  });
});
