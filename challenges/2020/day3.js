// gets the input file
import { inputs } from '../../index.js';

/**
31 length per Mapline - 0 index means 30

modulo % for endless map

Due to the local geology, trees in this area only grow on exact integer coordinates in a grid. You make a map (your puzzle input) of the open squares (.) and trees (#) you can see. For example:

..##.......
#...#...#..
.#....#..#.

Map pattern repeats to the right endlessly
Check how many trees encounter for specific slope jumps to the end of map.


 */

export const isTree = (mapStr, position) => {
  // get correct index pos by using modulo
  position = position % mapStr.length;

  if (mapStr.charAt(position) === '#') return true;
  return false;
};

// traverses the map using certain jumps on x and y axis. negative values to other directions
// returning number of trees encountered
export const mapTraverse = (mapStringArr, down, right) => {
  let posX = 0,
    posY = 0,
    numOfTrees = 0;
  // simulating each jump and stopping at end of map
  while (posX < mapStringArr.length - 1) {
    // y axis move
    posX += down;
    // x axis move
    posY += right;
    // ele is current biome position on map
    const ele = mapStringArr[posX];
    // check if tree
    console.log(posX, posY);
    if (isTree(ele, posY)) numOfTrees++;
  }
  for (posX += down; posX < mapStringArr.length; posX += down) {
    // ele is current position on map
    const ele = mapStringArr[posX];
    // x axis jump
    posY += right;
    // check if tree is at position
    if (isTree(ele, posY)) numOfTrees++;
  }
  return numOfTrees;
};

// displays results for map traverse according to challenges
export default function () {
  // getting our Map as String Array
  const mapStringArr = inputs.year20day3.trim().split('\n');

  // challenge 1
  const treeCount1 = mapTraverse(mapStringArr, 1, 3);

  // challenge 2
  // multiply tree counts of different jumps
  const treeCount2 = mapTraverse(mapStringArr, 1, 1);
  const treeCount3 = mapTraverse(mapStringArr, 1, 5);
  const treeCount4 = mapTraverse(mapStringArr, 1, 7);
  const treeCount5 = mapTraverse(mapStringArr, 2, 1);
  const productTreeCount =
    treeCount1 * treeCount2 * treeCount3 * treeCount4 * treeCount5;

  // reporting number of valid passwords
  console.log(
    `When moving 3 right and 1 down, we encounter ${treeCount1} trees in total.`
  );
  console.log(`When multiplying all tree counts, we get ${productTreeCount}.`);
}
