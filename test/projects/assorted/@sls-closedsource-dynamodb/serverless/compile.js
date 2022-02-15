/* eslint-disable import/no-extraneous-dependencies */
import minimist from 'minimist';
import assert from 'assert';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import fs from 'smart-fs';
import resolver from './.base/resolver.js';

(async () => {
  const args = minimist(process.argv.slice(2));
  const config = await resolver(args);
  assert(typeof args.env === 'string');
  assert(typeof args.stack === 'string');
  const fileDir = join(dirname(fileURLToPath(import.meta.url)), '..');
  const filePath = join(fileDir, `serverless-${args.env}-${args.stack}.config.yml`);
  fs.smartWrite(filePath, config);
})();
