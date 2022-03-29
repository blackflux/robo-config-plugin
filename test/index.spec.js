const path = require('path');
const expect = require('chai').expect;
const { load } = require('robo-config');
const plugin = require('../src/index');

describe('Testing Plugin', () => {
  it('Documenting Plugin Tasks', () => {
    expect(load(plugin).syncDocs()).to.deep.equal([]);
  });

  it('Testing Plugin Tasks', () => {
    expect(load(plugin).test(path.join(__dirname, 'projects'))).to.deep.equal({
      'assorted/@docker-lambda': [],
      'assorted/@dynamo-testing': [],
      'assorted/@npm-closedsource': [],
      'assorted/@npm-opensource': [],
      'assorted/@npm-opensource-os': [],
      'assorted/@sls-api': [],
      'assorted/@sls-closedsource': [],
      'assorted/@sls-closedsource-dynamodb': [],
      'assorted/@sls-closedsource-react': [],
      'assorted/@sls-cron-instance': [],
      'assorted/@sls-dynamodb-instance': [],
      'assorted/@sls-queue': [],
      'assorted/@sls-queue-instance': [],
      'assorted/@sls-router-instance': [],
      'assorted/@sls-router-scaling': [],
      'assorted/@sls-s3-instance': [],
      'assorted/@sls-trigger-instance': [],
      'assorted/@sls-error-defs': []
    });
  });
});
