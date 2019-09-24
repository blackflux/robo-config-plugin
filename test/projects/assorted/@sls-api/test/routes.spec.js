const path = require('path');
const fs = require('smart-fs');
const expect = require('chai').expect;

const toRouteName = (str) => str
  .replace(
    /(?:^\w|[A-Z]|\b\w)/g,
    (letter, index) => (index === 0 ? letter.toLowerCase() : letter.toUpperCase())
  )
  .replace(/[\s\-/]+/g, '');

describe('Testing routes.spec.js', () => {
  it('Synchronizing routes file...', () => {
    const srcFolder = path.join(__dirname, '..', 'src');
    const routesFile = path.join(srcFolder, 'routes.js');
    const handlerFiles = fs.walkDir(path.join(srcFolder, 'handler')).filter((f) => f.endsWith('.js')).sort();
    const routes = handlerFiles.map((f) => f.slice(0, -3)).reduce((p, f) => {
      const handlerFileContent = fs.smartRead(path.join(srcFolder, 'handler', `${f}.js`));
      const methods = Object.keys(handlerFileContent).sort();
      methods.forEach((m) => p.push(`module.exports.${toRouteName(`${f}/${m}`)} = require('./handler/${f}').${m};`));
      return p;
    }, []);
    const result = fs.smartWrite(routesFile, [
      ...{ true: ['/* eslint-disable max-len */'], false: [] }[routes.some((e) => e.length > 120)],
      ...routes
    ], { treatAs: 'txt' });
    expect(result, 'Routes file updated').to.equal(false);
  });
});
