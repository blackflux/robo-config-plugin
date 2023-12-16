import path from 'path';
import { logger } from 'lambda-monitor-logger';
import AWS from 'aws-sdk-wrap';

const aws = AWS(({ logger }));
const { sqs } = aws;

export default sqs.QueueProcessor({
  queues: {},
  stepsDir: path.join(__dirname, 'steps'),
  ingestSteps: []
});
