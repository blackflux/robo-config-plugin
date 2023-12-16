import { logger } from 'lambda-monitor-logger';
import AwsSdkWrap from 'aws-sdk-wrap';

export default AwsSdkWrap({
  logger,
  configService: { dynamodb: { endpoint: process.env.DYNAMODB_ENDPOINT } },
  services: {
    S3: AWS.S3
  }
});
