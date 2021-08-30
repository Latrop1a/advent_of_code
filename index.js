// module for filesystem I/O
import fs from 'fs';
// to get userInput from CLI (readable streams)
import readline from 'readline';
// imports the challenges
import day1 from './challenges/2020/day1.js';
import day2 from './challenges/2020/day2.js';
import day3 from './challenges/2020/day3.js';

// all input reads in one central object
export const inputs = {
  year20day1: fs.readFileSync(`./inputs/2020-1.txt`, 'utf-8'),
  year20day2: fs.readFileSync(`./inputs/2020-2.txt`, 'utf-8'),
  year20day3: fs.readFileSync(`./inputs/2020-3.txt`, 'utf-8'),
};

// to use readline streams
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//to close event listener/stream
rl.on('close', () => {
  console.log('\nStream end');
  process.exit(0);
});

/**
 * Start up Functions
 * Reads input from cli and selects challenge result to be displayed
 * Todo: get rid of switch with data obj or something
 */
function init() {
  console.log('Welcome to ADVENT OF CODE\n--------------------------------');
  rl.question('Select Day by number ', day => {
    day = parseInt(day);
    if (day > 0 && day < 4) {
      console.log(`Getting results for DAY ${day}:\n`);
      switch (day) {
        case 1:
          day1();
          rl.close();
          break;
        case 2:
          day2();
          rl.close();
          break;
        case 3:
          day3();
          rl.close();
          break;
        default:
          console.log('Something went wrong');
          rl.close();
          break;
      }
    } else {
      console.log('Invalid input or Day not finished');
      rl.close();
    }
  });
}

init();
