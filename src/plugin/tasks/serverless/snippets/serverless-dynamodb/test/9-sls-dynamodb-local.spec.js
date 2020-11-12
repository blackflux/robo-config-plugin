const path = require('path');
const yaml = require('yaml-boost');
const objectScan = require('object-scan');
const { describe } = require('node-tdd');
const fs = require('smart-fs');
const expect = require('chai').expect;

describe('Testing dynamodb-local', { envVarsFile: 'env.yml' }, () => {
  let dataStack;
  let tables = [];
  before(() => {
    dataStack = yaml.load(
      path.join(__dirname, '..', 'serverless.wrapper.yml'),
      {
        stack: 'data',
        region: process.env.AWS_REGION,
        env: 'local'
      }
    );
    tables = objectScan(['resources.Resources.*'], {
      filterFn: ({ value, context }) => {
        if (value.Type === 'AWS::DynamoDB::Table') {
          context.push(value.Properties);
        }
      }
    })(dataStack, []);
  });

  it('Testing tables set-up', async () => {
    const result = ['#!/bin/sh'];
    tables.forEach((table) => {
      const t = Object.fromEntries(Object.entries(table)
        .filter(([k]) => [
          'PointInTimeRecoverySpecification',
          'TimeToLiveSpecification'
        ].includes(k) === false)
        .map(([k, v]) => {
          if (k === 'TableName') {
            // eslint-disable-next-line no-template-curly-in-string
            return [k, v.replace('${self:provider.stage}', 'local')];
          }
          if (k === 'StreamSpecification') {
            return [k, { StreamEnabled: true, ...v }];
          }
          return [k, v];
        }));
      result.push(
        `AWS_ACCESS_KEY_ID=${process.env.AWS_ACCESS_KEY_ID} \\`,
        `AWS_SECRET_ACCESS_KEY=${process.env.AWS_SECRET_ACCESS_KEY} \\`,
        `AWS_REGION=${process.env.AWS_REGION} \\`,
        'aws dynamodb create-table \\',
        ` --cli-input-json '${JSON.stringify(t)}' \\`,
        ' --endpoint-url http://dynamodb-local:8000 \\',
        ` --region ${process.env.AWS_REGION}`
      );
    });
    expect(
      fs.smartWrite(path.join(__dirname, '..', 'docker', 'dynamodb.sh'), result),
      'DynamoDb tables updated. Please re-run.'
    ).to.equal(false);
  });
});
