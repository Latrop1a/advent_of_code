// gets the input file
import { inputs } from '../../index.js';

/**
The expected fields are as follows:

byr (Birth Year)
iyr (Issue Year)
eyr (Expiration Year)
hgt (Height)
hcl (Hair Color)
ecl (Eye Color)
pid (Passport ID)
cid (Country ID)
Passport data is validated in batch files (your puzzle input). Each passport is represented as a sequence of key:value pairs separated by spaces or newlines. Passports are separated by blank lines.

Here is an example batch file containing four passports:

ecl:gry pid:860033327 eyr:2020 hcl:#fffffd
byr:1937 iyr:2017 cid:147 hgt:183cm

iyr:2013 ecl:amb cid:350 eyr:2023 pid:028048884
hcl:#cfa07d byr:1929

hcl:#ae17e1 iyr:2013
eyr:2024
ecl:brn pid:760753108 byr:1931
hgt:179cm

hcl:#cfa07d eyr:2025 pid:166559648
iyr:2011 ecl:brn hgt:59in
The first passport is valid - all eight fields are present. The second passport is invalid - it is missing hgt (the Height field).

The third passport is interesting; the only missing field is cid, so it looks like data from North Pole Credentials, not a passport at all! Surely, nobody would mind if you made the system temporarily ignore missing cid fields. Treat this "passport" as valid.

*/

// parses the input file into Array with passport Maps
export const inputParser = inputStr => {
  // seperates big string on empty line into passports
  const inputArr = inputStr.trim().split(/\n\s*\n/);
  // parses the passport strings into key:value pairs and stores as nested array
  let passportArr = inputArr.map(ele => parsePassport(ele));
  // puts these into an array with map objects
  passportArr = passportArr.map(ele => passportArrayToMap(ele));
  //
  return passportArr;
};

// parses the passport line into object attributes
export const parsePassport = passportString => {
  // breaks string into array parts of key-value pairs
  // replace newlines with spaces to seperate key:value pairs
  // split on " " to get pairs then split those again into key and value
  const passportArr = passportString
    .trim()
    .replace(/\n/g, ' ')
    .split(' ')
    .map(ele => ele.split(':'));
  return passportArr;
};

// takes single passport string array and puts into map object
export const passportArrayToMap = passportArr => {
  let passportMap = new Map();
  passportArr.forEach(ele => passportMap.set(ele[0], ele[1]));
  return passportMap;
};

// checks if passport obj is valid according to ruleset 1
export const isPassportValid1 = passportMap => {
  if (
    passportMap.size === 8 ||
    (passportMap.size === 7 && !passportMap.has('cid'))
  ) {
    return true;
  } else {
    return false;
  }
};

// checks if passport obj is valid according to ruleset 2
export const isPassportValid2 = passportMap => {
  // all keys there?
  if (!areAllKeysThere(passportMap)) return false;
  // check all values of passport map
  // for of loop because cant return out of forEach
  for (const ele of passportMap) {
    if (!isKeyValuePairValid(ele[0], ele[1])) {
      return false;
    }
  }
  // return true if we dont find anything invalid
  return true;
};

// checks if all keys are there
export const areAllKeysThere = ppMap => {
  if (
    ppMap.has('byr') &&
    ppMap.has('iyr') &&
    ppMap.has('eyr') &&
    ppMap.has('hgt') &&
    ppMap.has('hcl') &&
    ppMap.has('ecl') &&
    ppMap.has('pid')
  ) {
    return true;
  } else {
    return false;
  }
};

// check hair color values
// using regExp
export const isHairColorValid = value => {
  // reg exp to check whether string starts with # and follows with 6 chars in range
  const regExp = new RegExp(/^#{1}[a-f, 0-9]{6}$/, 'g');
  if (regExp.test(value)) return true;
  return false;
};

export const isHeightValid = value => {
  if (value.includes('cm')) {
    const splitArr = value.split('c');
    if (splitArr[0] < 150 || splitArr[0] > 193) return false;
  } else if (value.includes('in')) {
    const splitArr = value.split('i');
    if (splitArr[0] < 59 || splitArr[0] > 76) return false;
  } else if (!value.includes('in') || !value.includes('cm')) return false;
  return true;
};

// checks each required key and returns false if values are out of bounds hcl
// could put a switch here
export const isKeyValuePairValid = (key, value) => {
  const eyeColorArr = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'];
  //checking simple keys
  if (key === 'byr' && (value < 1920 || value > 2002)) return false;
  else if (key === 'iyr' && (value < 2010 || value > 2020)) return false;
  else if (key === 'eyr' && (value < 2020 || value > 2030)) return false;
  // checks for only digits and 9 length
  else if (key === 'pid' && !/^[0-9]{9}$/g.test(value)) return false;
  // checking if eye color is part of eye color array
  else if (key === 'ecl' && !eyeColorArr.includes(value)) return false;
  // checking hair
  else if (key === 'hcl' && !isHairColorValid(value)) return false;
  // checking height requierement
  else if (key === 'hgt' && !isHeightValid(value)) return false;
  // if nothing strikes false, return true
  return true;
};

// default export for reporting, used in index.js
export default function () {
  // counter valid pwS
  let validCounter = 0;
  let validCounter2 = 0;
  const passportMapsArr = inputParser(inputs.year20day4);
  console.log(passportMapsArr.length);
  passportMapsArr.forEach(ele => {
    if (isPassportValid1(ele)) validCounter++;
    if (isPassportValid2(ele)) {
      validCounter2++;
      //console.log(ele);
    }
  });
  console.log('challenge 1 valid: ', validCounter);
  console.log('challenge 2 valid: ', validCounter2);
}
