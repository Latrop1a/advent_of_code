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

// checks if there is a tree at specific line and position
export const isTree = (mapStr, position) => {
  // get correct index pos by using modulo
  position = position % mapStr.length;

  if (mapStr.charAt(position) === '#') return true;
  return false;
};

// traverses the map using certain jumps on x and y axis. negative values to other directions
// returning number of trees encountered
export const mapTraverse = (mapStringArr, down, right) => {
  let posY = 0,
    posX = 0,
    numOfTrees = 0;
  // simulating each jump and stopping at end of map
  while (posY < mapStringArr.length - 1) {
    // y axis move
    posY += down;
    // x axis move
    posX += right;
    // ele is current biome position on map
    const ele = mapStringArr[posY];
    // check if tree
    if (isTree(ele, posX)) numOfTrees++;
  }
  return numOfTrees;
};

// displays results for map traverse according to challenges
export default function () {
  // getting our Map as String Array
  const mapStringArr = inputs.year20day3.trim().split('\n');

  // challenge 1
  const treeCountArr = [];
  treeCountArr[0] = mapTraverse(mapStringArr, 1, 3);

  // challenge 2
  // multiply tree counts of different jumps
  treeCountArr[1] = mapTraverse(mapStringArr, 1, 1);
  treeCountArr[2] = mapTraverse(mapStringArr, 1, 5);
  treeCountArr[3] = mapTraverse(mapStringArr, 1, 7);
  treeCountArr[4] = mapTraverse(mapStringArr, 2, 1);
  // reducing tree array to product of all
  const productTreeCount = treeCountArr.reduce(
    (product, trees) => product * trees
  );

  // reporting number of valid passwords and product for challenge 2
  console.log(
    `When moving 3 right and 1 down, we encounter ${treeCountArr[0]} trees in total.`
  );
  console.log(`When multiplying all tree counts, we get ${productTreeCount}.`);
}
