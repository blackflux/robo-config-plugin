const path = require('path');
const sfs = require('smart-fs');
const LRU = require('lru-cache-ext');
const aws = require('../core/aws');

const tableCache = new LRU({ maxAge: 24 * 60 * 60 * 1000 });

module.exports = (table) => tableCache.memoizeSync(
  table,
  () => aws.dy.Model(
    sfs.smartRead(path.join(__dirname, 'tables', `${table}.js`))
  )
);
