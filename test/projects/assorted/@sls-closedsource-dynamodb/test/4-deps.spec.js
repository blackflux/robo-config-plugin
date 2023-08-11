import path from 'path';
import fs from 'smart-fs';
import { describe } from 'node-tdd';
import { expect } from 'chai';
import * as lockfile from '@yarnpkg/lockfile';

const root = path.join(fs.dirname(import.meta.url), '..');

describe('Testing dependencies', () => {
  it('Testing lru-cache-ext version unique', () => {
    const lockUri = fs.readFileSync(path.join(root, 'yarn.lock'), 'utf8');
    const lockContent = lockfile.default.parse(lockUri);
    const keys = Object.keys(lockContent.object);
    const versions = keys.filter((e) => e.startsWith('lru-cache-ext@'));
    expect(versions).to.have.length(1);
  });
});
