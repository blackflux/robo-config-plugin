const path = require('path');
const { expect } = require('chai');
const { describe } = require('node-tdd');
const fs = require('smart-fs');
const processor = require('../../src/queue/queue');

describe('Testing queue', () => {
  it('Testing digraph generation', async () => {
    const digraphFile = path.join(__dirname, '..', '..', 'src', 'queue', 'digraph.dot');
    const digraph = processor.digraph();
    const result = fs.smartWrite(digraphFile, digraph, { treatAs: 'txt' });
    expect(result, 'Digraph file updated').to.equal(false);
  });
});
