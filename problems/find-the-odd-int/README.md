# Find the odd int

Given an array of integers, find the one that appears an odd number of times. There will always be only one integer that appears an odd number of times.

**Examples**

    [7] should return 7, because it occurs 1 time (which is odd).
    [0] should return 0, because it occurs 1 time (which is odd).
    [1,1,2] should return 2, because it occurs 1 time (which is odd).
    [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
    [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

# My version 🫣

<details>
<summary>View Solution</summary>

```javascript
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
```

</details>
<br >

# Code Review (by Mr.GPT)

## 1. `count` Function:

**Correctness:** The `count` function correctly counts the occurrences of each integer in the input array and returns a `Map` with the count for each integer.

**Efficiency:** The time complexity of this function is O(n), where n is the length of the input array, because it iterates through the array once.

**Improvements:** No major improvements needed for this function.

## 2. `findOdd` Function:

**Correctness:** The `findOdd` function correctly identifies the integer that appears an odd number of times by iterating through the `Map` returned by the `count` function.

**Efficiency:** The time complexity of this function is O(n), where n is the number of unique integers in the input array, because it iterates through the `Map` once.

**Improvements:** This function could be simplified by directly checking the count of each integer in the input array instead of using a separate `count` function.

## Overall Review:

**Correctness:** The code correctly identifies the integer that appears an odd number of times in the input array.

**Efficiency:** The overall time complexity of the provided code is O(n), where n is the length of the input array. This is efficient for most practical purposes.

**Improvements:** Consider simplifying the `findOdd` function to directly check the count of each integer in the input array instead of using a separate `count` function.

## Improved Version:

Here's an improved version of the `findOdd` function:

<details>
<summary>View GPT's Solution</summary>

```javascript
function findOdd(array) {
  const countMap = new Map();

  for (const num of array) {
    countMap.set(num, (countMap.get(num) || 0) + 1);
  }

  for (const [num, count] of countMap) {
    if (count % 2 !== 0) {
      return num;
    }
  }

  return null; // No odd count found
}
```

</details>
<br >

## Validation:

The provided code is correct and efficient for identifying the integer that appears an odd number of times in the input array. However, the `findOdd` function can be simplified for better readability. Overall, the code meets the requirements specified in the problem statement and is ready for use.
