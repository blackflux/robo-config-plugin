const path = require('path');
const expect = require('chai').expect;
const { load } = require('robo-config');
const plugin = require('../src/index');

it('Documenting Plugin Tasks', () => {
  expect(load(plugin).syncDocs()).to.deep.equal([]);
});

it('Testing Plugin Tasks', () => {
  expect(load(plugin).test(path.join(__dirname, 'project'), {
    repoKey: 'blackflux/robo-config',
    packageName: 'robo-config',
    repoName: 'robo-config',
    projectName: 'robo-config',
    owner: 'simlu',
    authorName: 'Lukas Siemon',
    mergeBot: 'MrsFlux'
  })).to.deep.equal([]);
});
