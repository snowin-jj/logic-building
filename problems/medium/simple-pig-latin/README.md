# Pig latin is cool

Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

**Examples**

```javascript
pigIt("Pig latin is cool"); // igPay atinlay siay oolcay
pigIt("Hello world !"); // elloHay orldway !
```

# My version

<details>
<summary>View Solution</summary>

```javascript
function pigIt(value = "") {
  const punctuationMarks = [
    "?",
    "!",
    ".",
    ",",
    ":",
    ";",
    "(",
    ")",
    "[",
    "]",
    "{",
    "}",
    "-",
    "_",
    "'",
    "...",
  ];
  return value
    .split(" ")
    .map((word) => {
      return `${word.slice(1)}${word.slice(0, 1)}${
        punctuationMarks.includes(word) ? "" : "ay"
      }`;
    })
    .join(" ");
}
```

</details>
<br >

# AI's Review

## Review of your "pigIt" function:

**Functionality:**

The code successfully implements the "pig latin" transformation, moving the first letter of each word to the end and adding "ay". It correctly handles words with punctuation marks, keeping them in place.

**Performance:**

- The approach using `split` and `map` has a time complexity of O(n), where n is the number of words in the input string. This is efficient for most practical scenarios.
- The function iterates through each word and performs string manipulation, which might be slightly slower than alternative approaches using regular expressions, but the difference is usually negligible.

**Best Practices:**

- The code is generally well-formatted and uses descriptive variable names.
- The use of constants for punctuation marks improves readability and maintainability.
- The conditional check for punctuation ensures correct handling of edge cases.

**Code Quality:**

- Comments could be added to explain the purpose of the function and the steps involved.
- Consider using more informative variable names like `punctuationChars` instead of `punctuationMarks`.

**Alternative Solution:**

While the current solution is efficient and well-written, here's an alternative using a regular expression:
<details>
<summary>View AI's Solution</summary>

```javascript
function pigIt(value = "") {
  return value.replace(
    /\w+/g,
    (word) => `${word.slice(1)}${word.slice(0, 1)}ay`
  );
}
```
</details>
<br >

This solution can be slightly faster for large inputs due to the efficiency of regular expressions. However, it might be less readable and flexible for more complex transformations.

## Comparison:

| Feature            | Original Solution | Alternative Solution                      |
| ------------------ | ----------------- | ----------------------------------------- |
| **Performance**    | O(n)              | O(n) (potentially faster on large inputs) |
| **Best Practices** | Yes               | Yes, but less readable                    |
| **Code Quality**   | Good              | Less readable due to regular expression   |
| **Flexibility**    | More flexible     | Less flexible for complex transformations |

**Conclusion:**

Both solutions are valid and achieve the desired functionality. The original solution offers a good balance of readability, performance, and flexibility, while the alternative might be slightly faster for large inputs but less readable. Choose the solution that best suits your specific needs and priorities.

**Additional tips:**

- If you expect very large inputs, you could explore more efficient algorithms using trie data structures.

**Ref:** https://www.codewars.com/kata/520b9d2ad5c005041100000f/javascript
