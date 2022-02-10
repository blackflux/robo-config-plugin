import path from 'path';
import objectScan from 'object-scan';
import { describe } from 'node-tdd';
import fs from 'smart-fs';

import { expect } from 'chai';
import dirname from '../src/util/dirname.js';

const normalize = (table) => objectScan([
  '*',
  '!PointInTimeRecoverySpecification',
  '!TimeToLiveSpecification',
  '!Tags'
], {
  reverse: false,
  filterFn: ({ property, value, context }) => {
    switch (property) {
      case 'TableName':
        // eslint-disable-next-line no-template-curly-in-string
        context[property] = value.replace('${self:provider.stage}', 'local');
        break;
      case 'StreamSpecification':
        context[property] = { StreamEnabled: true, ...value };
        break;
      default:
        context[property] = value;
        break;
    }
  }
})(table, {});

describe('Testing dynamodb-local', { envVarsFile: 'env-vars.yml' }, () => {
  let dataStack;
  let tables;

  beforeEach(async () => {
    process.env.TEST_SEED = Math.random();
    const resolver = (await import('../serverless/.base/resolver.js')).default;

    dataStack = resolver({
      stack: 'data',
      region: process.env.AWS_REGION,
      env: 'local'
    });
    tables = objectScan(['resources.Resources.*'], {
      filterFn: ({ value, context }) => {
        if (value.Type === 'AWS::DynamoDB::Table') {
          context.push(value.Properties);
        }
      }
    })(dataStack, []);
  });

  it('Testing normalize table', () => {
    expect(normalize({ StreamSpecification: {} }))
      .to.deep.equal({ StreamSpecification: { StreamEnabled: true } });
  });

  it('Testing tables set-up', async () => {
    const result = ['#!/bin/sh'];
    tables
      .map((table) => normalize(table))
      .forEach((table) => {
        result.push(
          `AWS_ACCESS_KEY_ID=${process.env.AWS_ACCESS_KEY_ID} \\`,
          `AWS_SECRET_ACCESS_KEY=${process.env.AWS_SECRET_ACCESS_KEY} \\`,
          `AWS_REGION=${process.env.AWS_REGION} \\`,
          'aws dynamodb create-table \\',
          ` --cli-input-json '${JSON.stringify(table)}' \\`,
          ' --endpoint-url http://dynamodb-local:8000 \\',
          ` --region ${process.env.AWS_REGION}`
        );
      });
    expect(
      fs.smartWrite(path.join(dirname(import.meta.url), '..', 'docker', 'dynamodb.sh'), result),
      'DynamoDb tables updated. Please re-run.'
    ).to.equal(false);
  });
});
