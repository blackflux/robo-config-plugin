import path from 'path';
import fs from 'smart-fs';
import { expect } from 'chai';

const toRouteName = (str) => str
  .replace(
    /(?:^\w|[A-Z]|\b\w)/g,
    (letter, index) => (index === 0 ? letter.toLowerCase() : letter.toUpperCase())
  )
  .replace(/[\s\-/]+/g, '');

describe('Testing hangler-gen.spec.js', () => {
  it('Synchronizing hangler file...', async () => {
    const srcFolder = path.join(fs.dirname(import.meta.url), '..', 'src');
    const hanglerFile = path.join(srcFolder, 'hangler.js');
    const handlerFiles = fs.walkDir(path.join(srcFolder, 'handler')).filter((f) => f.endsWith('.js')).sort();
    const handlers = await Promise.all(
      handlerFiles.map((f) => import(path.join(srcFolder, 'handler', f)).then((e) => [f.slice(0, -3), e]))
    );
    const imports = new Set();
    const exports = new Set();
    handlers.forEach(([f, handlerFileContent]) => {
      const capitalized = f.startsWith('api/');
      const methods = Object.keys(handlerFileContent).sort();
      methods.forEach((method) => {
        expect(
          method[0] === method[0].toUpperCase(),
          `Api methods should start with a upper-case letter, other with lower-case: ${f} ${method}`
        ).to.equal(capitalized);
      });
      imports.add(`import * as ${toRouteName(f)}_ from './handler/${f}.js';`);
      methods.forEach((m) => {
        exports.add(`export const ${toRouteName(`${f}/${m}`)} = ${toRouteName(f)}_.${m};`);
      });
    });
    const result = fs.smartWrite(hanglerFile, [
      ...{ true: ['/* eslint-disable max-len */'], false: [] }[[...imports, ...exports].some((r) => r.length > 120)],
      "import api from './core/api.js';",
      ...imports,
      '',
      'export const apiRouter = api.router;',
      'export const internalApi = api;',
      ...exports
    ], { treatAs: 'txt' });
    expect(result, 'Hangler file updated').to.equal(false);
  }).timeout(10000);
});
