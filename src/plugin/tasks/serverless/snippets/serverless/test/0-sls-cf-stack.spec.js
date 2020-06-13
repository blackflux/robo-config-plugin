const { describe } = require('node-tdd');
const path = require('path');
const yaml = require('yaml-boost');
const fs = require('smart-fs');
const expect = require('chai').expect;

describe('Testing serverless cf stack definitions', { cryptoSeed: 'seed' }, () => {
  let runner;
  before(() => {
    runner = (stack) => {
      const stackCf = yaml.load(
        path.join(__dirname, '..', 'serverless.wrapper.yml'),
        {
          stack,
          region: 'us-west-2',
          env: 'local'
        }
      );
      expect(
        fs.smartWrite(path.join(__dirname, 'sls-cf-stack', `$\{stack}.yml`), stackCf),
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
});
