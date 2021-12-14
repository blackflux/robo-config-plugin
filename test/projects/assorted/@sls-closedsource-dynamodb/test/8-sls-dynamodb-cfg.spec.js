const { describe } = require('node-tdd');
const expect = require('chai').expect;
const fs = require('smart-fs');
const path = require('path');
const deepmerge = require('deepmerge');
const dy = require('../src/dynamodb/dy');

describe('Testing dynamodb serverless configuration', { envVarsFile: './env-vars.yml' }, () => {
  // eslint-disable-next-line mocha/no-setup-in-describe
  fs.walkDir(path.join(__dirname, '..', 'src', 'dynamodb', 'tables'))
    .map((e) => e.slice(0, -3))
    .forEach((name) => {
      it(`Generating dynamodb schema: ${name}`, () => {
        const filepath = path.join(__dirname, '..', 'serverless', 'data', 'dynamodb', `${name}.yml`);
        const nameTitleCase = name.replace(
          /-?\b([a-z])/g,
          (_, m) => m.toUpperCase()
        );
        const { TableName, ...attr } = dy(name).schema;
        const schema = {
          resources: {
            Resources: {
              [`Dynamo${nameTitleCase}Table`]: {
                Properties: attr
              }
            }
          }
        };
        const r = fs.smartWrite(filepath, schema, {
          mergeStrategy: (existing, changeset) => deepmerge(existing, changeset, {
            arrayMerge: (target, source) => source
          })
        });
        expect(r, 'DynamoDB definition has updated').to.equal(false);
      });
    });
});
