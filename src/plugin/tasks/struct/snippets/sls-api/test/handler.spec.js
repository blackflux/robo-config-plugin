const path = require('path');
const minimist = require('minimist');
const fs = require('smart-fs');
const expect = require('chai').expect;
const LambdaTdd = require('lambda-tdd');
const { describe } = require('node-tdd');
const api = require('../src/handler').internalApi;
const handlerConf = require('./handler.conf');

const methods = ['Get', 'Post', 'Put', 'Patch', 'Options', 'Head', 'Delete', 'Any'];

const pathToCamelCase = (str) => str
  .replace(
    /(?:^\w|[A-Z]|\b\w)/g,
    (letter, index) => (index === 0 ? letter.toLowerCase() : letter.toUpperCase())
  )
  .replace(/[\s\-/]+/g, '');

LambdaTdd({
  cwd: path.join(__dirname, '..'),
  verbose: minimist(process.argv.slice(2)).verbose === true,
  timeout: minimist(process.argv.slice(2)).timeout,
  nockHeal: minimist(process.argv.slice(2))['nock-heal'],
  testHeal: minimist(process.argv.slice(2))['test-heal'],
  enabled: true,
  handlerFile: path.join(__dirname, '..', 'src', 'handler.js'),
  cassetteFolder: path.join(__dirname, 'handler', '__cassettes'),
  envVarYml: path.join(__dirname, 'env-vars.yml'),
  envVarYmlRecording: path.join(__dirname, 'env-vars.recording.yml'),
  testFolder: path.join(__dirname, 'handler'),
  ...handlerConf
}).execute();

describe('Testing handler.spec.js', {
  timeout: 10000
}, () => {
  let handlerFile;
  let handlerTestDir;
  let handlerTestFiles;

  before(() => {
    handlerFile = fs.smartRead(path.join(__dirname, '..', 'src', 'handler.js'));
    handlerTestDir = path.join(__dirname, 'handler');
    handlerTestFiles = fs.walkDir(handlerTestDir)
      .filter((f) => !f.startsWith('__cassettes'));
  });

  it('Synchronizing swagger file...', async () => {
    const swaggerFile = path.join(__dirname, '..', 'swagger.yml');
    const swaggerContent = await api.generateSwagger();
    const result = fs.smartWrite(swaggerFile, swaggerContent);
    expect(result, 'Swagger file updated').to.equal(false);
  });

  it('Testing for unexpected files', () => {
    handlerTestFiles.forEach((f) => {
      expect(f.endsWith('.spec.json'), `Unexpected File: $\{f}`).to.equal(true);
    });
  });

  it('Testing api gateway endpoints are in handler/api', () => {
    handlerTestFiles.forEach((f) => {
      const { handler } = fs.smartRead(path.join(handlerTestDir, f));
      const isApiEndpoint = handlerFile[handler].isApiEndpoint === true;
      const inApiFolder = /^api\//.test(f);
      expect(
        inApiFolder === isApiEndpoint,
        `Api Gateway Endpoints need to be in handler/api: $\{handler}`
      ).to.equal(true);
    });
  });

  it('Testing handler names end with request method', () => {
    handlerTestFiles.forEach((f) => {
      const { handler } = fs.smartRead(path.join(handlerTestDir, f));
      const isApiEndpoint = handlerFile[handler].isApiEndpoint === true;
      expect(
        !isApiEndpoint
        || handlerFile[handler].isRouter === true
        || methods.some((m) => handler.endsWith(m)),
        `Bad Handler Name: $\{handler}`
      ).to.equal(true);
    });
  });

  it('Testing handler test file location matches uri', () => {
    handlerTestFiles.forEach((f) => {
      const uri = pathToCamelCase(f.slice(0, -10));
      const { handler } = fs.smartRead(path.join(handlerTestDir, f));
      expect(
        uri.startsWith(handler),
        `Bad Test File Name: $\{f}. Expected "$\{uri}" to start with "$\{handler}"`
      ).to.equal(true);
    });
  });
});
