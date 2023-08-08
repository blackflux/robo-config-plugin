import objectScan from 'object-scan';
import { describe } from 'node-tdd';
import { expect } from 'chai';
import resolver from '../serverless/.base/resolver.js';

const tagNames = ['service', 'stage', 'resource'];

const resourceTypes = [
  'AWS::Lambda::Function',
  'AWS::SQS::Queue',
  'AWS::Kinesis::Stream',
  'AWS::DynamoDB::Table',
  'AWS::S3::Bucket',
  'AWS::ApiGateway::Stage',
  'AWS::CloudFront::Distribution'
];

const hasTags = (tagsRaw) => {
  const tags = Array.isArray(tagsRaw)
    ? Object.fromEntries(tagsRaw.map(({ Key, Value }) => [Key, Value]))
    : tagsRaw;
  return tags instanceof Object
    && !Array.isArray(tags)
    && tagNames.every((t) => t in tags);
};

const logic = {
  'functions.*': ({ value }) => !hasTags(value.tags),
  'resources.Resources.*': ({ value }) => resourceTypes.includes(value?.Type) && !hasTags(value?.Properties?.Tags)
};

const scan = objectScan(Object.keys(logic), {
  rtn: 'property',
  filterFn: ({ matchedBy, value }) => matchedBy.some((m) => logic[m]({ value }))
});

describe('Testing sls resource tags', () => {
  let apiStack;
  let dataStack;

  before(async () => {
    const loadStack = (stack) => resolver({ stack });
    apiStack = await loadStack('api');
    dataStack = await loadStack('data');
  });

  it('Testing api stack tags', () => {
    const missing = scan(apiStack);
    expect(missing).to.deep.equal([]);
  });

  it('Testing data stack tags', () => {
    const missing = scan(dataStack);
    expect(missing).to.deep.equal([]);
  });
});
