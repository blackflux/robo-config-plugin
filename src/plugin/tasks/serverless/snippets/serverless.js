const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const minimist = require('minimist');
// eslint-disable-next-line import/no-extraneous-dependencies
const yaml = require('yaml-boost');

const configFile = path.join(__dirname, 'serverless', '.base', 'resolver.yml');
module.exports = yaml.load(configFile, minimist(process.argv.slice(2)));
