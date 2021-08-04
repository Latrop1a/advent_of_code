// gets the input file
import { inputs } from '../../index.js';

/**
 * Advent of Code 2020 Day 1
 * Specifically, they need you to find the two entries that sum to 2020
 * and then multiply those two numbers together.
 */

// look for 2 eles matching the specific sum
const findSumArr = (inputArr, sum = 2020) => {
  // iterating over Arr to find the matching elements
  for (let i = 0; i < inputArr.length; i++) {
    // parse String ele to integer
    const ele1 = parseInt(inputArr[i]);
    for (let n = 0; n < inputArr.length; n++) {
      const ele2 = parseInt(inputArr[n]);
      // condition to not get same ele twice
      if (n != i && ele1 + ele2 === sum) {
        // returning obejct
        return { ele1, ele2 };
      }
    }
  }
  return 0;
};

// day 1 default function to find result
export default function () {
  //getting our input as string and splitting into array
  const inputArr = inputs.year20day1.split('\n');
  //calling function to find the correct values
  const values = findSumArr(inputArr);
  console.log(`Two values that sum to 2020: ${values.ele1} + ${values.ele2}`);
  console.log(`Product from those: ${values.ele1 * values.ele2}`);
}
