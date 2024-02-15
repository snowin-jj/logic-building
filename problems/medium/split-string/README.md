# Split Strings

Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('\_').

**Examples:**

```
'abc' =>  ['ab', 'c_']
'abcdef' => ['ab', 'cd', 'ef']
```

# My Solution

<details>
<summary>View Solution</summary>

```javascript
function splitString(value = "") {
  const numOfPairs = Math.round(value.length / 2);
  const pairs = [];

  let startIndex = 0;
  for (let i = 0; i < numOfPairs; i++) {
    let endIndex = startIndex + 2;
    if (!value[startIndex + 1]) pairs.push(`${value[startIndex]}_`);
    else pairs.push(value.slice(startIndex, endIndex));
    startIndex += 2;
  }

  return pairs;
}
```

</details>
<br >

# AI's Review

**Functionality:**

- The function correctly splits strings into pairs of two characters, handling both even and odd lengths.
- It appropriately adds an underscore for missing characters in odd-length strings.

**Performance:**

- The current approach has a time complexity of **O(n)** due to the loop and string slicing.

**Best Practices:**

- The code is generally well-formatted and uses descriptive variable names.
- Adding comments to explain the logic behind the `startIndex` and `endIndex` calculations would enhance clarity.

**Alternative Solution:**

Here's an alternative solution using a regular expression that might be slightly more concise:

```javascript
function splitString(value = "") {
  if (value.trim() === "") return [];
  return value.match(/.{1,2}/g).map((pair) => pair.padEnd(2, "_"));
}
```

This approach leverages the `match` method to split the string into chunks of up to 2 characters and then pads each chunk with an underscore if needed using `padEnd`.

**Comparison:**

| Feature        | Original Solution | Alternative Solution            |
| -------------- | ----------------- | ------------------------------- |
| Functionality  | Correct           | Correct                         |
| Performance    | O(n)              | O(n), might be slightly faster  |
| Best Practices | Good              | Good, more concise              |
| Code Quality   | Readable          | More concise, but less explicit |

**Choosing the Right Solution:**

- If you prefer explicit loops and string manipulation, the original solution is suitable.
- If you're comfortable with regular expressions and value conciseness, the alternative solution is worth considering.

Both solutions have similar performance characteristics, so the choice often depends on personal preferences and readability considerations.
