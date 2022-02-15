// eslint-disable-next-line import/no-extraneous-dependencies
import gardener from 'js-gardener';
import fs from 'smart-fs';
import process from 'process';

if (process.argv[1] === fs.filename(import.meta.url)) {
  gardener({
    skip: [],
    docker: true
  }).catch(() => process.exit(1));
}
