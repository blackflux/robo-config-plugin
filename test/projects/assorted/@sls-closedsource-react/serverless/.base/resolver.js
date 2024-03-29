/* eslint-disable import/no-extraneous-dependencies */
import { join } from 'path';
import fs from 'smart-fs';
import { load } from 'yaml-boost';
import objectScan from 'object-scan';
import objectHash from 'object-hash-strict';

export default async (kwargs) => {
  const configFile = join(fs.dirname(import.meta.url), 'resolver.yml');
  const r = await load(configFile, kwargs);
  const logic = {
    'provider.environment.*': ({ parent, property, value }) => {
      if (value === null) {
        // eslint-disable-next-line no-param-reassign
        delete parent[property];
      }
    },
    'provider.iam.role.statements[*].Action': ({ value }) => {
      value.sort();
    },
    'provider.iam.role.statements': ({ parent, property, value }) => {
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
