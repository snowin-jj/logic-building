# Count the number of Duplicates

Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

**Example**

```
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
```

# My Version

<details>
<summary>View Solution</summary>

```javascript
function countDuplicate(string) {
  const letterCount = {};
  let repeatedLettersCount = 0;
  Array.from(string).forEach((l) => {
    const letter = l.toLowerCase();
    if (letterCount[letter]) {
      letterCount[letter] += 1;
    } else {
      letterCount[letter] = 1;
    }
  });

  for (const [_key, value] of Object.entries(letterCount)) {
    if (value > 1) repeatedLettersCount++;
  }
  return repeatedLettersCount;
}
```

</details>
<br >

# AI's Review

**Functionality:**

- The code correctly counts the number of distinct characters (case-insensitive) and digits that appear more than once in the input string. It handles mixed cases and multiple occurrences appropriately.

**Performance:**

- Time complexity is **O(n)**, where n is the string length, due to a single pass through the string and a linear scan of the character counts.
- Space complexity is also **O(n)** in the worst case for storing character counts.

**Best Practices:**

- Clear variable names and a logical structure enhance readability.
- Using a dictionary for character counts is efficient for this task.
- Converting characters to lowercase for case-insensitive counting is a good practice.

**Alternative Solution:**

Here's an alternative solution using a Set for potentially improved readability and conciseness:

<details>
<summary>View AI's Solution</summary>

```javascript
function countDuplicate(string) {
  const uniqueChars = new Set();
  const duplicatedChars = new Set();

  for (const char of string.toLowerCase()) {
    if (uniqueChars.has(char)) {
      duplicatedChars.add(char);
    } else {
      uniqueChars.add(char);
    }
  }

  return duplicatedChars.size;
}
```

</details>
<br >

**Comparison:**

| Feature        | Original Solution | Alternative Solution (Set)         |
| -------------- | ----------------- | ---------------------------------- |
| Functionality  | Correct           | Correct                            |
| Performance    | O(n) time         | O(n) time                          |
| Best Practices | Good, clear logic | Clear, concise                     |
| Code Quality   | Readable          | Potentially more readable for some |

**Choosing the Right Solution:**

- Both solutions have identical performance characteristics.
- The original solution might be preferred for its explicitness and familiarity of dictionary-based counting.
- The alternative solution might be preferred for its conciseness and potential readability benefits using Sets, especially for those comfortable with their behavior.

The choice ultimately depends on personal preference, coding style, and team conventions.

**Ref:** https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1
