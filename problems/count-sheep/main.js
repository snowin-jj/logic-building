/**
 * Consider an array/list of sheep where some sheep may be missing from their place. We need a function that
 * counts the number of sheep present in the array (true means present).
 * 
 * For example,
 * [true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]

  The correct answer would be 17.
  Hint: Don't forget to check for bad values like null/undefined
 */

function countSheep(sheepList) {
  let sheepCount = 0;
  for (let i = 0; i < sheepList.length; i++) {
    if (sheepList[i]) sheepCount += 1;
  }

  return sheepCount;
}

console.log(
  countSheep([
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    true,
  ])
);
