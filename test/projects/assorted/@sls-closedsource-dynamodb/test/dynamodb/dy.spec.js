import fs from 'smart-fs';
import path from 'path';
import { expect } from 'chai';
import { describe } from 'node-tdd';
import CamelCase from '../../src/util/camel-case.js';
import dirname from '../../src/util/dirname.js';

const { pathToCamelCase } = CamelCase;

const folder = path.join(dirname(import.meta.url), '..', '..', 'src', 'dynamodb');

describe('Testing dynamodb/dy.js', () => {
  it('Generating...', () => {
    const files = fs.walkDir(path.join(folder, 'tables'));

    const r = fs.smartWrite(path.join(folder, 'dy.js'), [
      "import LRU from 'lru-cache-ext';",
      "import aws from '../core/aws.js';",
      ...files.map((f) => `import * as ${pathToCamelCase(f.slice(0, -3))} from './tables/${f}';`),
      '',
      'const cache = new LRU({ maxAge: 24 * 60 * 60 * 1000 });',
      'const memoize = (name, logic) => cache.memoizeSync(name, () => aws.dy.Model(logic));',
      '',
      'const lookup = Object.fromEntries([',
      ...files.map((f, idx) => `  ['${
        f.slice(0, -3)
      }', ${
        pathToCamelCase(f.slice(0, -3))
      }]${
        idx === files.length - 1 ? '' : ','
      }`),
      ']);',
      '',
      'export default (table) => memoize(table, lookup[table]);'
    ], { treatAs: 'txt' });
    expect(r).to.equal(false);
  });
});
