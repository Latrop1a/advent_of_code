// getting day2 to test
import * as day2 from './day2.js';
// assert function for testing
import assert from 'assert';

// TESTS

// test parse String
// deepEqual because object values are compared instead of object
assert.deepStrictEqual(
  day2.parsePasswordString('5-17 z: knzcjlgjlkvglrsqzwt'),
  {
    pwRangeArr: [5, 17],
    charToCheck: 'z',
    password: 'knzcjlgjlkvglrsqzwt',
  },
  'failed to parse rule-pw-string'
);

// test validityRule1
assert.strictEqual(
  day2.checkPasswordValidity1({
    pwRangeArr: [1, 3],
    charToCheck: 'a',
    password: 'abcde',
  }),
  true,
  'rule1 fail'
);

// test validityRule2
assert.strictEqual(
  day2.checkPasswordValidity2({
    pwRangeArr: [1, 3],
    charToCheck: 'a',
    password: 'abcde',
  }),
  true,
  'rule2 fail 1'
);

assert.strictEqual(
  day2.checkPasswordValidity2({
    pwRangeArr: [2, 13],
    charToCheck: 'j',
    password: 'sjjjjjjjjjjjtjj',
  }),
  true,
  'rule2 fail 2'
);

assert.strictEqual(
  day2.checkPasswordValidity2({
    pwRangeArr: [2, 9],
    charToCheck: 'c',
    password: 'ccccccccc',
  }),
  false,
  'rule2 fail 3'
);

assert.strictEqual(
  day2.checkPasswordValidity2({
    pwRangeArr: [17, 18],
    charToCheck: 'x',
    password: 'xxxxxxxxxxxxxxxxkxx',
  }),
  true,
  'rule2 fail 4'
);

console.log('All Tests working');
