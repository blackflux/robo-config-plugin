import { describe } from 'node-tdd';
import { expect } from 'chai';
import fs from 'smart-fs';
import path from 'path';
import deepmerge from 'deepmerge';

describe('Testing dynamodb serverless configuration', { envVarsFile: './env-vars.yml' }, () => {
  let dy;

  beforeEach(async () => {
    process.env.TEST_SEED = Math.random();
    dy = (await import('../src/dynamodb/dy.js')).default;
  });

  // eslint-disable-next-line mocha/no-setup-in-describe
  fs.walkDir(path.join(fs.dirname(import.meta.url), '..', 'src', 'dynamodb', 'tables'))
    .map((e) => e.slice(0, -3))
    .forEach((name) => {
      it(`Generating dynamodb schema: ${name}`, () => {
        const filepath = path.join(fs.dirname(import.meta.url), '..', 'serverless', 'data', 'dynamodb', `${name}.yml`);
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
