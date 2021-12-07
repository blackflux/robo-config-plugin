// eslint-disable-next-line import/no-extraneous-dependencies
const minimist = require('minimist');
const resolver = require('./serverless/.base/resolver');

module.exports = resolver(minimist(process.argv.slice(2)));
