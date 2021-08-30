// gets the input file
import { inputs } from '../../index.js';

/**
 * 1-3 a: abcde
 * 1-3 b: cdefg
 * 2-9 c: ccccccccc
 * Each line gives the password policy and then the password. The password policy indicates the lowest
 * and highest number of times a given letter must appear for the password to be valid. For example,
 * 1-3 a means that the password must contain a at least 1 time and at most 3 times.
 */

// parses the input line into password, rule and char to check
export const parsePasswordString = passwordString => {
  //splitting string into 3 parts
  const splitArr = passwordString.split(' ');
  // example [ '5-17', 'z:', 'knzcjlgjlkvglrsqzwt' ]
  // refining output to use in checkPassword function
  const pwRangeArr = splitArr[0].split('-').map(ele => parseInt(ele));
  const charToCheck = splitArr[1].substring(0, 1);
  const password = splitArr[2];

  return { pwRangeArr, charToCheck, password };
};

// checks if the password is valid according to the rules set in part1
export const isPasswordValid1 = parsedPwObj => {
  // splitting passwordStr on char occurence and counting resulting array
  const count = parsedPwObj.password.split(parsedPwObj.charToCheck).length - 1;
  // returning true if char count is between the password range provided
  return (
    count >= parsedPwObj.pwRangeArr[0] && count <= parsedPwObj.pwRangeArr[1]
  );
};

// checks if the password is valid according to the rules set in part2
export const isPasswordValid2 = parsedPwObj => {
  let counter = 0;
  //destructuring obj for better readability
  const { password: pw, charToCheck: char, pwRangeArr: posArr } = parsedPwObj;
  // checking if char is at the substring position
  if (pw.substr(posArr[0] - 1, 1) === char) counter++;
  if (pw.substr(posArr[1] - 1, 1) === char) counter++;

  // returning true if we have exactly one occurence of char at the given spots
  return counter === 1;
};

// day 2 default function
export default function () {
  let validPwCount1 = 0;
  let validPwCount2 = 0;
  // getting input as string and splitting into array
  const inputArr = inputs.year20day2.trim().split('\n');
  // loop over input array
  inputArr.forEach(ele => {
    // parsing password Rule line into usable parts
    const parsedStringObj = parsePasswordString(ele);
    // putting those into checkValidity function. if valid returns true and validPassword counter goes up
    if (isPasswordValid1(parsedStringObj)) validPwCount1++;
    if (isPasswordValid2(parsedStringObj)) validPwCount2++;
  });
  // reporting number of valid passwords
  console.log(
    `In the corrupted file are ${validPwCount1} valid Passwords present for ruleset 1`
  );
  console.log(
    `In the corrupted file are ${validPwCount2} valid Passwords present for ruleset 2`
  );
}
