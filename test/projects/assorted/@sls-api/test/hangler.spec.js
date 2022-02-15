import path from 'path';
import minimist from 'minimist';
import fs from 'smart-fs';
import LambdaTdd from 'lambda-tdd';
import { describe } from 'node-tdd';
import { expect } from 'chai';
import hanglerConf from './hangler.conf.js';
import { internalApi as api } from '../src/hangler.js';

const methods = ['Get', 'Post', 'Put', 'Patch', 'Options', 'Head', 'Delete', 'Any'];

const pathToCamelCase = (str) => str
  .replace(
    /(?:^\w|[A-Z]|\b\w)/g,
    (letter, index) => (index === 0 ? letter.toLowerCase() : letter.toUpperCase())
  )
  .replace(/[\s\-/]+/g, '');

LambdaTdd({
  cwd: path.join(fs.dirname(import.meta.url), '..'),
  verbose: minimist(process.argv.slice(2)).verbose === true,
  timeout: minimist(process.argv.slice(2)).timeout,
  nockHeal: minimist(process.argv.slice(2))['nock-heal'],
  testHeal: minimist(process.argv.slice(2))['test-heal'],
  enabled: true,
  handlerFile: path.join(fs.dirname(import.meta.url), '..', 'src', 'hangler.js'),
  cassetteFolder: path.join(fs.dirname(import.meta.url), 'handler', '__cassettes'),
  envVarYml: path.join(fs.dirname(import.meta.url), 'env-vars.yml'),
  envVarYmlRecording: path.join(fs.dirname(import.meta.url), 'env-vars.recording.yml'),
  testFolder: path.join(fs.dirname(import.meta.url), 'handler'),
  ...hanglerConf
}).execute();

describe('Testing hangler.spec.js', {
  timeout: 10000
}, () => {
  let handlerFile;
  let handlerTestDir;
  let handlerTestFiles;

  before(async () => {
    handlerFile = await import(path.join(fs.dirname(import.meta.url), '..', 'src', 'hangler.js'));
    handlerTestDir = path.join(fs.dirname(import.meta.url), 'handler');
    handlerTestFiles = fs.walkDir(handlerTestDir)
      .filter((f) => !f.startsWith('__cassettes'));
  });

  it('Synchronizing swagger file...', async () => {
    const swaggerFile = path.join(fs.dirname(import.meta.url), '..', 'swagger.yml');
    const swaggerContent = await api.generateSwagger();
    const result = fs.smartWrite(swaggerFile, swaggerContent);
    expect(result, 'Swagger file updated').to.equal(false);
  });

  it('Testing for unexpected files', () => {
    handlerTestFiles.forEach((f) => {
      expect(f.endsWith('.spec.json'), `Unexpected File: ${f}`).to.equal(true);
    });
  });

  it('Testing api gateway endpoints are in handler/api', () => {
    handlerTestFiles.forEach((f) => {
      const { handler } = fs.smartRead(path.join(handlerTestDir, f));
      const isApiEndpoint = handlerFile[handler].isApiEndpoint === true;
      const inApiFolder = /^api\//.test(f);
      expect(
        inApiFolder === isApiEndpoint,
        `Api Gateway Endpoints need to be in handler/api: ${handler}`
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
        `Bad Handler Name: ${handler}`
      ).to.equal(true);
    });
  });

  it('Testing handler test file location matches uri', () => {
    handlerTestFiles.forEach((f) => {
      const uri = pathToCamelCase(f.slice(0, -10));
      const { handler } = fs.smartRead(path.join(handlerTestDir, f));
      expect(
        uri.startsWith(handler),
        `Bad Test File Name: ${f}. Expected "${uri}" to start with "${handler}"`
      ).to.equal(true);
    });
  });
});
