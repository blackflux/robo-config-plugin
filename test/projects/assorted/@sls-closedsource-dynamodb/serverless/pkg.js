/* eslint-disable import/no-extraneous-dependencies */
import assert from 'assert';
import path from 'path';
import fs from 'smart-fs';
import * as lockfile from '@yarnpkg/lockfile';

const root = path.join(fs.dirname(import.meta.url), '..');

const depNames = `
nccExclude
`.split('\n').filter((e) => !!(e));

// ====================
// rewrite lib/package.json
// ====================
const packageUri = path.join(root, 'package.json');
const packageContent = fs.smartRead(packageUri);
const dependencies = Object.fromEntries(Object
  .entries(packageContent.dependencies)
  .filter(([k]) => depNames.includes(k)));
fs.smartWrite(path.join(root, 'lib', 'package.json'), {
  type: 'module',
  dependencies,
  license: packageContent.license
});

// ====================
// rewrite lib/yarn.lock
// ====================
const lockUri = fs.readFileSync(path.join(root, 'yarn.lock'), 'utf8');
const lockContent = lockfile.default.parse(lockUri);
assert(lockContent.type === 'success');

const newLockContentKeys = Object.entries(dependencies).map(([k, v]) => `${k}@${v}`);
for (let i = 0; i < newLockContentKeys.length; i += 1) {
  const content = lockContent.object[newLockContentKeys[i]];
  assert(content !== undefined);
  if (!content.dependencies) {
    // eslint-disable-next-line no-continue
    continue;
  }
  const subDeps = Object.entries(content.dependencies)
    .map(([k, v]) => `${k}@${v}`)
    .filter((v) => !newLockContentKeys.includes(v));
  newLockContentKeys.push(...subDeps);
}
const newLockContent = Object.fromEntries(
  newLockContentKeys.map((r) => [r, lockContent.object[r]])
);
fs.writeFileSync(
  path.join(root, 'lib', 'yarn.lock'),
  lockfile.default.stringify(newLockContent)
);
