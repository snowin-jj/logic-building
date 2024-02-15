# Create Phone Number

Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

**Example:**

```javascript
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]); // => returns "(123) 456-7890"
```

The returned format must be correct in order to complete this challenge.
Don't forget the space after the closing parentheses!

# My Solution

<details>
<summary>View Solution</summary>

```javascript
function createPhoneNumber(numbers = []) {
  return numbers.join("").replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
}
```

</details>
<br >

# AI's Review

**Functionality:**

- The code correctly formats a 10-digit array of numbers into a phone number string with parentheses, spaces, and hyphens.

**Performance:**

- The time complexity is **O(n)** due to joining the array and using `replace` with a regular expression.

**Best Practices:**

- The code is generally well-formatted and uses a descriptive function name.
- Consider adding comments to explain the regular expression pattern and its components.

**Alternative Solution:**

While the current solution is efficient, here's an alternative using string interpolation for potentially better readability:

<details>
<summary>View AI's Solution</summary>

```javascript
function createPhoneNumber(numbers = []) {
  if (numbers.length !== 10) {
    throw new Error("Invalid number of digits. Must be 10.");
  }
  return `(${numbers.slice(0, 3).join("")}) ${numbers
    .slice(3, 6)
    .join("")}-${numbers.slice(6).join("")}`;
}
```

</details>
<br >

This approach avoids regular expressions and directly constructs the formatted string using string interpolation and slicing. Additionally, it includes error handling for invalid input lengths.

**Comparison:**

| Feature        | Original Solution | Alternative Solution                   |
| -------------- | ----------------- | -------------------------------------- |
| Functionality  | Correct           | Correct                                |
| Performance    | O(n)              | O(n), similar performance              |
| Best Practices | Good              | Good, more readable                    |
| Code Quality   | Readable          | More readable, explicit error handling |

**Choosing the Right Solution:**

- If you prefer regular expressions and concise code, the original solution is suitable.
- If readability and explicit error handling are important, the alternative solution is a good choice.

Both solutions have similar performance, so the decision often depends on coding style and preferences.

**Ref:** https://www.codewars.com/kata/525f50e3b73515a6db000b83
