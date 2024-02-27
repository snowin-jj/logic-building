# Bit Counting

Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of `1234` is `10011010010`, so the function should return `5` in this case

# My Version

<details>
<summary>View Solution</summary>

```javascript
function countBits(decimal) {
  let quotient = decimal;
  let remainder;
  let bitCount = 0;

  while (quotient > 0) {
    remainder = Math.floor(quotient % 2);
    quotient = Math.floor(quotient / 2);
    remainder === 1 && bitCount++;
  }

  return bitCount;
}
```

</details>
<br >

# AI's Review

**Functionality:**

- The code correctly implements a function that takes an integer and returns the number of "1" bits in its binary representation.

**Performance:**

- The time complexity is **O(log n)**, where n is the input number. This is because the loop iterates based on the number of bits in the binary representation, which scales logarithmically with the input value.

**Best Practices:**

- The code effectively converts the decimal input to binary through iterative division and modulo operations.
- Adding comments to explain the base case (checking `quotient > 0`) and the bit counting logic would enhance readability.

**Alternative Solution:**

Here's an alternative solution using the built-in `toString(2)` method to directly convert to binary and count "1"s with a regular expression:

<details>
<summary>View AI's Solution</summary>

```javascript
function countOneBits(n) {
  return (n.toString(2).match(/1/g) || []).length;
}
```

</details>
<br >

This approach leverages the browser's built-in methods, potentially offering improved readability and conciseness. However, its performance might be slightly slower in certain environments due to the involvement of string manipulation and regular expressions.

**Comparison:**

| Feature        | Original Solution | Alternative Solution (Built-in methods)   |
| -------------- | ----------------- | ----------------------------------------- |
| Functionality  | Correct           | Correct                                   |
| Performance    | O(log n)          | Potentially slower, environment dependent |
| Best Practices | Good              | More concise, but less explicit           |
| Code Quality   | Readable          | More concise, utilizes built-in methods   |

**Choosing the Right Solution:**

- If readability and understanding the logic behind binary conversion are priorities, the original solution might be preferred.
- If conciseness and potentially reduced need for external libraries are important, the alternative solution is worth considering.

Remember that the performance difference between the two solutions may be negligible for most practical cases. However, for performance-critical scenarios in specific environments, consider benchmarking both approaches and using the one that yields better results in your specific context.

**Ref:** https://www.codewars.com/kata/526571aae218b8ee490006f4
