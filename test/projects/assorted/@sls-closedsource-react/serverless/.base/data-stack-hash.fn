const crypto = require('crypto');
const path = require('path');
const objectHash = require('object-hash-strict');
const yaml = require('yaml-boost');

const identifier = crypto.randomBytes(8).toString('hex');

module.exports = (args) => {
  if (args[identifier] !== undefined) {
    return '--hash--';
  }
  return objectHash(yaml.load(
    path.join(__dirname, 'resolver.yml'),
    { [identifier]: true, ...args, stack: 'data' }
  ));
};
