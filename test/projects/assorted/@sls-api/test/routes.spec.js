import path from 'path';
import fs from 'smart-fs';
import { expect } from 'chai';
import dirname from '../src/util/dirname.js';

const toRouteName = (str) => str
  .replace(
    /(?:^\w|[A-Z]|\b\w)/g,
    (letter, index) => (index === 0 ? letter.toLowerCase() : letter.toUpperCase())
  )
  .replace(/[\s\-/]+/g, '');

describe('Testing routes.spec.js', () => {
  it('Synchronizing routes file...', async () => {
    const srcFolder = path.join(dirname(import.meta.url), '..', 'src');
    const routesFile = path.join(srcFolder, 'routes.js');
    const handlerFiles = fs.walkDir(path.join(srcFolder, 'handler')).filter((f) => f.endsWith('.js')).sort();
    const handlers = await Promise.all(
      handlerFiles.map((f) => import(path.join(srcFolder, 'handler', f)).then((e) => [f.slice(0, -3), e]))
    );
    const imports = new Set();
    const exports = new Set();
    handlers.forEach(([f, handlerFileContent]) => {
      const methods = Object.keys(handlerFileContent).sort();
      imports.add(`import * as ${toRouteName(f)} from './handler/${f}.js';`);
      methods.forEach((m) => {
        exports.add(`export const ${toRouteName(`${f}/${m}`)} = ${toRouteName(f)}.${m};`);
      });
    });
    const result = fs.smartWrite(routesFile, [
      ...{ true: ['/* eslint-disable max-len */'], false: [] }[[...imports, ...exports].some((r) => r.length > 120)],
      ...imports,
      '',
      ...exports
    ], { treatAs: 'txt' });
    expect(result, 'Routes file updated').to.equal(false);
  }).timeout(10000);
});
