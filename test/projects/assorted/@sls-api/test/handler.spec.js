const path = require('path');
const minimist = require('minimist');
const fs = require('smart-fs');
const expect = require('chai').expect;
const LambdaTdd = require('lambda-tdd');
const api = require('../src/handler').internalApi;
const { stripHeaders, flush, modifiers } = require('./handler.conf');

LambdaTdd({
  cwd: path.join(__dirname, '..'),
  verbose: minimist(process.argv.slice(2)).verbose === true,
  enabled: true,
  handlerFile: path.join(__dirname, '..', 'src', 'handler.js'),
  cassetteFolder: path.join(__dirname, 'handler', '__cassettes'),
  envVarYml: path.join(__dirname, 'env.yml'),
  envVarYmlRecording: path.join(__dirname, 'env.recording.yml'),
  testFolder: path.join(__dirname, 'handler'),
  stripHeaders,
  flush,
  modifiers
}).execute();

describe('Testing handler.spec.js', () => {
  it('Synchronizing swagger file...', async () => {
    const swaggerFile = path.join(__dirname, '..', 'swagger.yml');
    const swaggerContent = await api.generateSwagger();
    const result = fs.smartWrite(swaggerFile, swaggerContent);
    expect(result, 'Swagger file updated').to.equal(false);
  });
});
