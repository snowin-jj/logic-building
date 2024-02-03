# Problem Title

Rearrange Digits to Create the Highest Possible Number

# My Version

```javascript
function descendingOrder(n) {
  return +String(n)
    .split("")
    .sort((a, b) => b - a)
    .join("");
}

console.log(descendingOrder(42145));
```

# Chat GPT's Review

## Performance and Runtime:

The performance and runtime of this function are efficient. The time complexity is O(n log n), where n is the number of digits in the input number. This is due to the use of the \`sort\` method, which has a time complexity of O(n log n).

## Improvements Needed:

1. **Type Conversion:** The function uses type conversion (\`+String(n)\`) to convert the input number to a string. While this works fine, it might be more straightforward to use \`toString()\` method directly on the input number.

## Good Aspects:

1. **Concise Logic:** The function has concise logic using string manipulation and sorting to achieve the desired result.
2. **Readability:** The function is easy to read and understand, making it suitable for a variety of users.
