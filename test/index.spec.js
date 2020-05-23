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
      'assorted/@npm-closedsource': [],
      'assorted/@npm-opensource': [],
      'assorted/@npm-opensource-es': [],
      'assorted/@sls-api': [],
      'assorted/@sls-closedsource': [],
      'assorted/@sls-closedsource-react': [],
      'assorted/@sls-queue': [],
      'assorted/@sls-queue-instance': [],
      'assorted/@sls-s3-instance': []
    });
  });
});
