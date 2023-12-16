import { expect } from 'chai';
import index from '../src/index.js';

describe('Testing Package', () => {
  it('Testing Addition', () => {
    expect(index(7, 9)).to.equal(16);
  });
});
