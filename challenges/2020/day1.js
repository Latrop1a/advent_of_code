// gets the input file
import { inputs } from '../../index.js';

/**
 * Advent of Code 2020 Day 1
 * Specifically, they need you to find the two entries that sum to 2020
 * and then multiply those two numbers together.
 */

// look for 2 eles matching the specified sum
const findSumOf2 = (inputArr, sum = 2020) => {
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

// look for 3 eles matching the specified sum
const findSumOf3 = (inputArr, sum = 2020) => {
  // iterating over Arr to find the matching elements
  for (let i = 0; i < inputArr.length; i++) {
    // parse String ele to integer
    const ele1 = parseInt(inputArr[i]);
    for (let n = 0; n < inputArr.length; n++) {
      // skip to next iteration so we dont get same element
      if (n === i) {
        continue;
      }
      const ele2 = parseInt(inputArr[n]);
      for (let k = 0; k < inputArr.length; k++) {
        const ele3 = parseInt(inputArr[k]);
        // same as above
        if (k === i || k === n) {
          continue;
        }
        // looking for our result
        if (ele1 + ele2 + ele3 === sum) {
          // returning obejct
          return { ele1, ele2, ele3 };
        }
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
  const values = findSumOf2(inputArr);
  const values2 = findSumOf3(inputArr);
  console.log(`Two values that sum to 2020: ${values.ele1} + ${values.ele2}`);
  console.log(`Product from those: ${values.ele1 * values.ele2}`);
  console.log('--------------------------------');
  console.log(
    `Three values that sum to 2020: ${values2.ele1} + ${values2.ele2} + ${values2.ele3}`
  );
  console.log(
    `Product from those: ${values2.ele1 * values2.ele2 * values2.ele3}`
  );
}
