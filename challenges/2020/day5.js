// gets the input file
import { inputs } from '../../index.js';

/**

For example, consider just the first seven characters of FBFBBFFRLR:

Start by considering the whole range, rows 0 through 127.
F means to take the lower half, keeping rows 0 through 63.
B means to take the upper half, keeping rows 32 through 63.
F means to take the lower half, keeping rows 32 through 47.
B means to take the upper half, keeping rows 40 through 47.
B keeps rows 44 through 47.
F keeps rows 44 through 45.
The final F keeps the lower of the two, row 44.
The last three characters will be either L or R; these specify exactly one of the 8 columns of seats on the plane (numbered 0 through 7). The same process as above proceeds again, this time with only three steps. L means to keep the lower half, while R means to keep the upper half.

For example, consider just the last 3 characters of FBFBBFFRLR:

Start by considering the whole range, columns 0 through 7.
R means to take the upper half, keeping columns 4 through 7.
L means to take the lower half, keeping columns 4 through 5.
The final R keeps the upper of the two, column 5.
So, decoding FBFBBFFRLR reveals that it is the seat at row 44, column 5.

Every seat also has a unique seat ID: multiply the row by 8, then add the column. In this example, the seat has ID 44 * 8 + 5 = 357.


*/

/**
 * Parses the string into usable parts
 * @param {String} inputStr inputStr coming from readFile and through default function
 * @returns returns 2d array with all seat ids which are split into row and column
 */
export const inputParser = inputStr => {
  const passportArr = inputStr
    .trim()
    .split('\n')
    .map(ele => {
      let newArr = [];
      newArr[0] = ele.substring(0, 7);
      newArr[1] = ele.substring(7);
      return newArr;
    });
  return passportArr;
};

/**
 * Gets row out of string - range of 0 to 127
 * @param {*} rowString format 7 digits F or B eg "FBFFBBB"
 * @returns int number of row
 */
export const getRow = rowString => {
  let rowNumberRange = [0, 127];
  for (let i = 0; i < rowString.length; i++) {
    const sideStr = rowString[i];
    rowNumberRange = getCorrectHalf(rowNumberRange, sideStr);
  }
  return rowNumberRange[0];
};

/**
 * Gets col out of string - range of 0 to 7
 * @param {*} colString format 3 digits F or B eg "RLL"
 * @returns int number of col
 */
export const getCol = colString => {
  let colNumberRange = [0, 7];
  for (let i = 0; i < colString.length; i++) {
    const sideStr = colString[i];
    colNumberRange = getCorrectHalf(colNumberRange, sideStr);
  }
  return colNumberRange[0];
};

export const getSeatId = (row, col) => {
  const seatID = row * 8 + col;
  return seatID;
};

/**
 * Halves a number range and takes a specific half
 * @param {Array} numberRange gives the range of numbers down to
 * @param {String} side decides which side of number range gets used
 * @returns the now smaller range of possible seat position
 */
export const getCorrectHalf = (numberRange, side) => {
  // gets the range difference
  let numDiff = numberRange[1] - numberRange[0] + 1;
  // lower half is chosen
  if (side === 'F' || side === 'L') {
    // lower top range by half of difference
    numberRange[1] = numberRange[1] - numDiff / 2;
  } else if (side === 'B' || side === 'R') {
    // increase bottom range by half of difference
    numberRange[0] = numberRange[0] + numDiff / 2;
  }
  return numberRange;
};

/**
 * Finds the missing seat in the array according to challenge 2
 * @param {Array} seatIDArr array with all seatIds in random order
 * @returns seatID which is missing
 */
export const getSeatChallenge2 = seatIDArr => {
  let seatID;
  // sort seatID Array
  // with compare function to sort chronological
  seatIDArr = seatIDArr.sort((a, b) => a - b);
  seatIDArr.forEach((ele, index, arr) => {
    // checks for missing seat id
    if (arr[index + 1] != ele + 1 && arr[index + 1] == ele + 2) {
      seatID = arr[index] + 1;
    }
  });
  return seatID;
};

// default function used in index.js
export default function () {
  // parsed big string into array with all the seat ids
  let parsedString = inputParser(inputs.year20day5);
  // CHALlENGE 1: finding highest seat ID
  let highestSeatId = 0;
  // getting col and row numbers and then getting seatId
  let seatIDArr = parsedString.map(ele => {
    let seatID = getSeatId(getRow(ele[0]), getCol(ele[1]));
    if (seatID > highestSeatId) highestSeatId = seatID;
    return seatID;
  });
  console.log('highest Seat ID: ', highestSeatId);
  console.log('missing Seat ID: ', getSeatChallenge2(seatIDArr));
}
