// module for filesystem I/O
import fs from 'fs';
// to get userInput from CLI (readable streams)
import readline from 'readline';
// imports the challenges
import day1 from './challenges/2020/day1.js';

// all input reads in one central object
export const inputs = {
  year20day1: fs.readFileSync(`./inputs/2020-1.txt`, 'utf-8'),
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
 */
function init() {
  console.log('Welcome to ADVENT OF CODE\n--------------------------------');
  rl.question('Select Day by number ', day => {
    day = parseInt(day);
    if (day > 0 && day < 2) {
      console.log(`Getting results for DAY ${day}:\n`);
      switch (day) {
        case 1:
          day1();
          rl.close();
          break;
        default:
          break;
      }
    } else {
      console.log('Invalid input or Day not finished');
      rl.close();
    }
  });
}

init();
