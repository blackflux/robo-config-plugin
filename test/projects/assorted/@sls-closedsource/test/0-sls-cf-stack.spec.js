const { describe } = require('node-tdd');
const objectScan = require('object-scan');
const path = require('path');
const yaml = require('yaml-boost');
const fs = require('smart-fs');
const expect = require('chai').expect;

describe('Testing serverless cf stack definitions', { cryptoSeed: 'seed' }, () => {
  let apiStack;
  let dataStack;
  let runner;
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
        fs.smartWrite(path.join(__dirname, 'sls-cf-stack', `${stack}.yml`), stackCf),
        'Stack cf updated. Please re-run.'
      ).to.equal(false);
    };
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

  it('Testing DynamoDB Point-in-time', () => {
    objectScan(['resources.Resources.*.Type'], {
      filterFn: ({ value, parent }) => {
        if (value === 'AWS::DynamoDB::Table') {
          const setting = get(parent, 'Properties.PointInTimeRecoverySpecification.PointInTimeRecoveryEnabled');
          expect([true, false].includes(setting),
            'DynamoDB Point-in-time recovery should be explicitly specified.')
            .to.deep.equal(true);
        }
      }
    })(dataStack);
  });
});
