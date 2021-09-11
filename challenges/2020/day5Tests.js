// getting day2 to test
import * as day5 from './day5.js';
// assert function for testing
import assert from 'assert';

// TESTS

// testing getCorrectHalf()
assert.deepStrictEqual(
  day5.getCorrectHalf([0, 127], 'F'),
  [0, 63],
  'getCorrectHalf fail1'
);

assert.deepStrictEqual(
  day5.getCorrectHalf([0, 127], 'B'),
  [64, 127],
  'getCorrectHalf fail2'
);

assert.deepStrictEqual(
  day5.getCorrectHalf([32, 63], 'F'),
  [32, 47],
  'getCorrectHalf fail3'
);

assert.deepStrictEqual(
  day5.getCorrectHalf([32, 63], 'B'),
  [48, 63],
  'getCorrectHalf fail4'
);

// getRow()
assert.strictEqual(day5.getRow('BFFFBBF'), 70, 'getRow fail1');

assert.strictEqual(day5.getRow('FFFBBBF'), 14, 'getRow fail2');

assert.strictEqual(day5.getRow('BBFFBBF'), 102, 'getRow fail3');

console.log('\n\n-----------------\nAll Tests working\n-----------------');
