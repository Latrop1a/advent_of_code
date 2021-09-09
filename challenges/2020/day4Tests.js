// getting day2 to test
import * as day4 from './day4.js';
// assert function for testing
import assert from 'assert';

// TESTS

// testing isHeightValid
assert.strictEqual(day4.isHeightValid('160cm'), true, 'isHeight fail 1');
assert.strictEqual(day4.isHeightValid('54in'), false, 'isHeight fail 1');
assert.strictEqual(day4.isHeightValid('cms150'), false, 'isHeight fail 1');

// testing isHairColorValid
assert.strictEqual(
  day4.isHairColorValid('#ad0845'),
  true,
  'isHairColor fail 1'
);

assert.strictEqual(
  day4.isHairColorValid('ad0845'),
  false,
  'isHairColor fail 1'
);

assert.strictEqual(
  day4.isHairColorValid('#adt845'),
  false,
  'isHairColor fail 1'
);

// testing key value pair function
assert.strictEqual(
  day4.isKeyValuePairValid('byr', '2003'),
  false,
  'byr fail too high'
);

assert.strictEqual(
  day4.isKeyValuePairValid('byr', '1911'),
  false,
  'byr fail too low'
);

assert.strictEqual(
  day4.isKeyValuePairValid('byr', '1950'),
  true,
  'byr fail not accepting right input'
);

assert.strictEqual(
  day4.isKeyValuePairValid('iyr', '2009'),
  false,
  'iyr fail too low'
);

assert.strictEqual(
  day4.isKeyValuePairValid('iyr', '2021'),
  false,
  'iyr fail too high'
);

assert.strictEqual(
  day4.isKeyValuePairValid('iyr', '2015'),
  true,
  'iyr fail not accepting right input'
);

assert.strictEqual(
  day4.isKeyValuePairValid('eyr', '2019'),
  false,
  'eyr fail too low'
);

assert.strictEqual(
  day4.isKeyValuePairValid('eyr', '2031'),
  false,
  'eyr fail too high'
);

assert.strictEqual(
  day4.isKeyValuePairValid('eyr', '2025'),
  true,
  'eyr fail not accepting right input'
);

assert.strictEqual(
  day4.isKeyValuePairValid('pid', '15468798'),
  false,
  'pid fail 8 digits'
);

assert.strictEqual(
  day4.isKeyValuePairValid('pid', '1546879879'),
  false,
  'pid fail 10 digits'
);

assert.strictEqual(
  day4.isKeyValuePairValid('pid', '15468op89'),
  false,
  'pid fail other chars than digits'
);

assert.strictEqual(
  day4.isKeyValuePairValid('pid', '154688989'),
  true,
  'pid fail not accepting 9 digits as input'
);

assert.strictEqual(
  day4.isKeyValuePairValid('ecl', 'amb'),
  true,
  'ecl fail not accepting "amb" as right input'
);

assert.strictEqual(
  day4.isKeyValuePairValid('ecl', 'zur'),
  false,
  'ecl fail accepting "zur" as right input'
);

console.log('\n\n-----------------\nAll Tests working\n-----------------');
