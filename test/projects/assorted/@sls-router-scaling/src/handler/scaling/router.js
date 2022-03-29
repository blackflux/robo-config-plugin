import { wrap as wrapFn } from 'lambda-async';
import { wrap as wrapHook } from 'lambda-cfn-hook';
import aws from '../../core/aws.js';

const { lambda } = aws;

const scaler = lambda.FunctionScaler({
  functionName: `${process.env.SERVICE_NAME}-api-${process.env.ENVIRONMENT}-Router`
});

export const fn = wrapFn(scaler());
export const hookPre = wrapHook(scaler(true));
