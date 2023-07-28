/* eslint-disable import/no-extraneous-dependencies */
import { join } from 'path';
import assert from 'assert';
import minimist from 'minimist';
import fs from 'smart-fs';
import resolver from './.base/resolver.js';

(async () => {
  const args = minimist(process.argv.slice(2));
  const config = await resolver(args);
  assert(typeof args.env === 'string');
  assert(typeof args.stack === 'string');
  const fileDir = join(fs.dirname(import.meta.url), '..');
  const filePath = join(fileDir, `serverless-${args.env}-${args.stack}.config.yml`);
  fs.smartWrite(filePath, config);
})();
