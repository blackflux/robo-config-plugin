const path = require('path');
const yaml = require('yaml-boost');
const objectScan = require('object-scan');
const { describe } = require('node-tdd');
const fs = require('smart-fs');
const expect = require('chai').expect;

const normalize = (table) => objectScan([
  '*',
  '!PointInTimeRecoverySpecification',
  '!TimeToLiveSpecification'
], {
  reverse: false,
  filterFn: ({ property, value, context }) => {
    if (property === 'TableName') {
      // eslint-disable-next-line no-template-curly-in-string
      context[property] = value.replace('${self:provider.stage}', 'local');
    } else if (property === 'StreamSpecification') {
      context[property] = { StreamEnabled: true, ...value };
    } else {
      context[property] = value;
    }
  }
})(table, {});

describe('Testing dynamodb-local', { envVarsFile: 'env.yml' }, () => {
  let dataStack;
  let tables;
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
      fs.smartWrite(path.join(__dirname, '..', 'docker', 'dynamodb.sh'), result),
      'DynamoDb tables updated. Please re-run.'
    ).to.equal(false);
  });
});
