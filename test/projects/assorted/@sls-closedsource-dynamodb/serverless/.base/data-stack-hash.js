/* eslint-disable import/no-extraneous-dependencies */
import crypto from 'crypto';
import path from 'path';
import fs from 'smart-fs';
import objectHash from 'object-hash-strict';
import { load } from 'yaml-boost';

const identifier = crypto.randomBytes(8).toString('hex');

export default async (args) => {
  if (args[identifier] !== undefined) {
    return '--hash--';
  }
  return objectHash(await load(
    path.join(fs.dirname(import.meta.url), 'resolver.yml'),
    { [identifier]: true, ...args, stack: 'data' }
  ));
};
