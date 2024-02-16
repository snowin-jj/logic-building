# Stop gninnipS My sdroW!

Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

**Examples:**

```
"Hey fellow warriors"  --> "Hey wollef sroirraw"
"This is a test        --> "This is a test"
"This is another test" --> "This is rehtona test"
```

# My Solution

<details>
<summary>View Solution</summary>

```javascript
function snipWords(str = "") {
  return str
    .split(" ")
    .map((word) =>
      word.length >= 5 ? word.split("").reverse().join("") : word
    )
    .join(" ");
}
```

</details>
<br >

# AI's Review

**Functionality:**

- The code correctly reverses words with 5 or more letters while preserving other words and spaces.

**Performance:**

- The time complexity is **O(n \* L)** where n is the number of words and L is the average word length. This is due to iterating over words and potentially reversing letters within them.

**Best Practices:**

- The code is generally well-formatted and uses a descriptive function name.
- Consider adding comments to explain the logic behind the word length check and reversal.

**Alternative Solution:**

Here's an alternative solution using a regular expression that might be slightly more concise:

<details>
<summary>View Solution</summary>

```javascript
function snipWords(str = "") {
  return str.replace(/\b\w{5,}\b/g, (word) =>
    word.split("").reverse().join("")
  );
}
```

</details>
<br >

This approach leverages a regular expression (`\b\w{5,}\b`) to match words with 5 or more letters and directly performs the replacement with the reversed version.

**Comparison:**

| Feature        | Original Solution | Alternative Solution            |
| -------------- | ----------------- | ------------------------------- |
| Functionality  | Correct           | Correct                         |
| Performance    | O(n \* L)         | O(n), potentially faster        |
| Best Practices | Good              | Good, more concise              |
| Code Quality   | Readable          | More concise, but less explicit |

**Choosing the Right Solution:**

- If readability and understanding the logic are priorities, the original solution is better.
- If conciseness and potential performance optimization are important, the alternative solution is worth considering.

Remember that the runtime complexity in the original solution might become more noticeable for very long strings or words with many characters. In general, both solutions are valid and the choice depends on your specific needs and preferences.

**Ref:** https://www.codewars.com/kata/5264d2b162488dc400000001
