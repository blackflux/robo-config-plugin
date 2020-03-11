const path = require('path');
const { logger } = require('lambda-monitor-logger');
const { sqs } = require('aws-sdk-wrap')({ logger });

module.exports = sqs.QueueProcessor({
  queues: {},
  stepsDir: path.join(__dirname, 'steps'),
  ingestSteps: []
});
