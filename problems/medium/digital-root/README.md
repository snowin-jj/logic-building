# Sum of Digits / Digital Root

Digital root is the recursive sum of all the digits in a number.

Given `n`, take the sum of the digits of `n`. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

**Examples**

```
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
```

# My Version

<details>
<summary>View Solution</summary>

```javascript
function splitAndSum(num) {
  let sum = 0;
  String(num)
    .split("")
    .forEach((n) => (sum += parseInt(n)));
  return sum;
}

function sumOfDigits(number = 10) {
  let summedNumber = splitAndSum(number);

  while (String(summedNumber).length > 1) {
    summedNumber = splitAndSum(summedNumber);
  }

  return summedNumber;
}
```

</details>
<br >

# AI's Review

**Functionality:**

- The code correctly calculates the digital root (sum of digits until a single-digit number is obtained) of a non-negative integer.

**Performance:**

- The time complexity is **O(log n)** due to the loop iterating potentially up to the number of digits in the input.
- However, for very large numbers, this might become inefficient.

**Best Practices:**

- The code is generally well-formatted and uses descriptive variable names.
- Consider using a recursive approach or a different loop structure (e.g., modulo operator) for potentially improved readability and performance for large inputs.

**Alternative Solution:**

Here's an alternative solution using recursion that might be more concise and efficient for larger inputs:

<details>
<summary>View AI's Solution</summary>

```javascript
function sumOfDigits(num) {
  if (num < 10) return num; // Base case: single digit
  return sumOfDigits((num % 10) + Math.floor(num / 10)); // Recursive call with digit sum and remaining digits
}
```

</details>
<br >

This approach uses recursion to continuously extract the last digit, add it to the sum of remaining digits obtained recursively, and return the final single-digit sum.

**Comparison:**

| Feature        | Original Solution | Alternative Solution (Recursive)    |
| -------------- | ----------------- | ----------------------------------- |
| Functionality  | Correct           | Correct                             |
| Performance    | O(log n)          | Potentially faster for large inputs |
| Best Practices | Good              | More concise, but less explicit     |
| Code Quality   | Readable          | More concise, recursive approach    |

**Choosing the Right Solution:**

- If readability and understanding the logic are priorities, the original solution might be preferred.
- If conciseness and potential performance optimization for large inputs are important, the recursive solution is worth considering.

Remember that the performance difference between the two solutions may not be noticeable for smaller or moderate inputs. For large numbers, consider benchmarking both approaches for your specific use case and choosing the most efficient one.

**Ref:** https://www.codewars.com/kata/541c8630095125aba6000c00/javascript
