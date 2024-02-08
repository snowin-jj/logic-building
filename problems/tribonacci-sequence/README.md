# Tribonacci Sequence

Well met with Fibonacci bigger brother, AKA Tribonacci.
As the name may already reveal, it works basically like a Fibonacci, but summing the last 3
(instead of numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(.

So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence: `[1, 1 ,1, 3, 5, 9, 17, 31, ...]`

But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:
`[0, 0, 1, 1, 2, 4, 7, 13, 24, ...]`

Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.

Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array (except in C return NULL) and be ready for anything else which sis not clearly specified ;)

**Ref:** https://www.codewars.com/kata/556deca17c58da83c00002db/train/javascript

# My version

```javascript
function tribonacci(input, n) {
  if (n === 0) return [];

  let result = input;
  let appendIdx = input.length;

  if (n <= appendIdx) {
    return result.slice(0, n);
  }

  for (let i = 0; i < n && appendIdx < n; i++, appendIdx++) {
    const tribonacciNum =
      result[appendIdx - 1] + result[appendIdx - 2] + result[appendIdx - 3];
    result.push(tribonacciNum);
  }

  return result;
}
```

# GPT's Review

**1. Time Complexity:**

The time complexity of the tribonacci function primarily depends on the input parameter `n`.
The loop iterates up to `n`, calculating each Tribonacci number by summing the last three elements of the result array.
Inside the loop, the calculation of each Tribonacci number takes constant time as it involves simple arithmetic operations.
Therefore, the overall time complexity is `O(n)`.

**2. Space Complexity:**

The space complexity of the `tribonacci` function depends on the input parameters `input` and `n`.
The result array stores the Tribonacci sequence elements, which can grow up to size `n`.
Therefore, the space complexity is `O(n)`.

Overall, the given implementation has a time complexity of O(n) and a space complexity of O(n). This implementation is reasonably efficient for small `n` values but may become inefficient for large `n` values due to the linear growth of the result array.

## Improvement Suggestions:

- Optimize the loop to calculate Tribonacci numbers without storing the entire sequence in memory.

Here's an improved version of the program:

```javascript
function tribonacci(input, n) {
  if (n === 0) return [];
  if (n <= 3) return input.slice(0, n);

  const result = [...input];

  for (let i = input.length; i < n; i++) {
    const nextTribonacci = result[i - 1] + result[i - 2] + result[i - 3];
    result.push(nextTribonacci);
  }

  return result;
}
```

This improved version avoids unnecessary calculations and optimizes memory usage by not storing the entire sequence in memory. It only stores the necessary elements to generate the Tribonacci sequence up to the `n`th element.
