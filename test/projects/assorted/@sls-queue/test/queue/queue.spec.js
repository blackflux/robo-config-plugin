import path from 'path';
import { expect } from 'chai';
import { describe } from 'node-tdd';
import fs from 'smart-fs';

describe('Testing queue', { envVarsFile: '../env-vars.yml' }, () => {
  it('Testing digraph generation', async () => {
    process.env.TEST_SEED = Math.random();
    const { default: processor } = await import('../../src/queue/queue.js');
    const digraphFile = path.join(fs.dirname(import.meta.url), '..', '..', 'src', 'queue', 'digraph.dot');
    const digraph = processor.digraph();
    const result = fs.smartWrite(digraphFile, digraph, { treatAs: 'txt' });
    expect(result, 'Digraph file updated').to.equal(false);
  });
});
