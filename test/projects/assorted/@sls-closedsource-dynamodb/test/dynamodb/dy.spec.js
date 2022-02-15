import fs from 'smart-fs';
import { join } from 'path';
import { expect } from 'chai';
import { describe } from 'node-tdd';

const pathToCamelCase = (str) => str
  .replace(
    /(?:^\w|[A-Z]|\b\w)/g,
    (letter, index) => (index === 0 ? letter.toLowerCase() : letter.toUpperCase())
  )
  .replace(/[\s\-/]+/g, '');

const folder = join(fs.dirname(import.meta.url), '..', '..', 'src', 'dynamodb');

describe('Testing dynamodb/dy.js', () => {
  it('Generating...', () => {
    const files = fs.walkDir(join(folder, 'tables'));

    const r = fs.smartWrite(join(folder, 'dy.js'), [
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
