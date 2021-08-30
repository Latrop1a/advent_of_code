// getting day2 to test
import * as day3 from './day3.js';
// assert function for testing
import assert from 'assert';
// import data for map traverse test
import { inputs } from '../../index.js';

// TESTS

// testing isTree function
assert.strictEqual(day3.isTree('..#..#', 2), true, 'tree1 fail');

assert.strictEqual(day3.isTree('..#..#', 6), false, 'tree2 fail');

assert.strictEqual(day3.isTree('..#..#', 0), false, 'tree3 fail');

assert.strictEqual(day3.isTree('..#..#', 8), true, 'tree3 fail');

// testing traverseFunction

const mapStringArr = inputs.year20day3.trim().split('\n');
assert.strictEqual(
  day3.mapTraverse(mapStringArr, 1, 3),
  145,
  'traverse expected 145'
);

console.log('All Tests working');
