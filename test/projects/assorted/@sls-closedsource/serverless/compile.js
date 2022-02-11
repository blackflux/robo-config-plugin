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
  fs.smartWrite(join(dirname(fileURLToPath(import.meta.url)), '..', `serverless-${args.env}.config.yml`), config);
})();
