/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const yaml = require('yaml-boost');
const objectScan = require('object-scan');
const objectHash = require('object-hash-strict');

module.exports = (kwargs) => {
  const configFile = path.join(__dirname, 'resolver.yml');
  const r = yaml.load(configFile, kwargs);
  const logic = {
    'provider.iamRoleStatements[*].Action': ({ value }) => {
      value.sort();
    },
    'provider.iamRoleStatements': ({ parent, property, value }) => {
      const iamRoleStatements = {};
      value.forEach((e) => {
        const { Resource, ...other } = e;
        const h = objectHash(other);
        if (!(h in iamRoleStatements)) {
          iamRoleStatements[h] = { ...e };
        } else {
          iamRoleStatements[h].Resource = [
            iamRoleStatements[h].Resource,
            Resource
          ].flat();
        }
      });
      // eslint-disable-next-line no-param-reassign
      parent[property] = Object.values(iamRoleStatements);
    }
  };
  objectScan(Object.keys(logic), {
    filterFn: ({
      matchedBy, parent, property, value
    }) => {
      matchedBy.forEach((m) => {
        logic[m]({ parent, property, value });
      });
    }
  })(r);
  return r;
};
