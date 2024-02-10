/**
 * Given an array of integers, find the one that appears an odd number of times.
 * There will always be only one integer that appears an odd number of times.
    **Examples**
        [7] should return 7, because it occurs 1 time (which is odd).
        [0] should return 0, because it occurs 1 time (which is odd).
        [1,1,2] should return 2, because it occurs 1 time (which is odd).
        [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
        [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
 */

function count(array) {
  const result = new Map();

  for (let i = 0; i < array.length; i++) {
    const currentItem = array[i];
    if (result.has(currentItem)) {
      result.set(currentItem, result.get(currentItem) + 1);
    } else {
      result.set(currentItem, 1);
    }
  }

  return result;
}

function findOdd(array) {
  const countedList = count(array);
  let oddCountItem;

  countedList.forEach((itemCount, item, _map) => {
    if (itemCount % 2) {
      oddCountItem = item;
    }
  });
  return oddCountItem;
}

console.log(findOdd([0]));
