const assert = require('assert');
const { greet } = require('../src/utils');

describe('Utils', () => {
  it('should return a greeting message', () => {
    const result = greet('John');
    assert.strictEqual(result, 'Hello, John!');
  });
});

