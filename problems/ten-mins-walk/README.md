# Valid Walk Check

You live in the city of Cartesia where all roads are laid out in a perfect grid.

You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk.

The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk(eg. ['n', 's', 'w', 'e']).

You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block,
so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only).
It will never give you an empty array (that's not a walk, that's standing still!).

# My version

```javascript
function isValidWalk(walk) {
  if (walk.length !== 10) {
    return false;
  }

  let count = {
    n: 0,
    s: 0,
    e: 0,
    w: 0,
  };

  for (let direction of walk) {
    count[direction]++;
  }

  return count.n === count.s && count.e === count.w;
}
```

# Chat GPT's Review

## Performance and Runtime:

The performance and runtime of this function are efficient. The time complexity is O(n), where n is the length of the input array walk. This is because the function iterates through each element of the array once.

## Improvements Needed:

**Input Validation:** The function currently checks if the length of the input array is exactly 10 to ensure that the walk will take exactly ten minutes. However, it does not check if the directions are valid (i.e., 'n', 's', 'e', or 'w' only). Adding input validation for valid directions would improve the function's robustness.

**Early Exit:** Since the function checks for the exact length of the input array, it can return false as soon as the length is not 10, without further processing. This would provide an early exit and improve efficiency for invalid input arrays.

## Good Aspects:

**Correctness:** The function correctly checks if the walk will take exactly ten minutes and if it returns to the starting point.

**Readability:** The function is clear and easy to understand, with descriptive variable names and comments for explanation.

## Improved Version:

```javascript
function isValidWalk(walk) {
  if (walk.length !== 10) {
    return false;
  }

  let count = {
    n: 0,
    s: 0,
    e: 0,
    w: 0,
  };

  for (let direction of walk) {
    if (!["n", "s", "e", "w"].includes(direction)) {
      return false; // Invalid direction
    }
    count[direction]++;
  }

  return count.n === count.s && count.e === count.w;
}
```

## Performance Comparison:

The performance of the improved version is similar to the original solution. However, the improved version provides input validation for valid directions, ensuring the correctness of the result.

## My thoughts

✅ I've passed the exam!!! 😁
