const { logger } = require('lambda-monitor-logger');
const aws = require('aws-sdk-wrap')({ logger });

module.exports = aws;
