# Human Readable Time

Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

```
HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
```

The maximum time never exceeds 359999 (99:59:59)
You can find some examples in the test fixtures.

# My solution

<details>
<summary>View Solution</summary>

```javascript
function humanReadableTime(sec) {
  if (sec < 0 || sec > 359999) return;

  let remainingSec = sec % 3600;
  let hr = String(Math.floor(sec / 3600)).padStart(2, `0`);
  let mins = String(Math.floor(remainingSec / 60)).padStart(2, `0`);
  let secs = String(Math.floor(remainingSec % 60)).padStart(2, `0`);

  return `${hr}:${mins}:${secs}`;
}
```

</details>
<br >

# AI's Solution

**Functionality:**

- The `humanReadableTime` function correctly converts seconds to a human-readable format (HH:MM:SS).
- It handles edge cases by returning undefined for invalid inputs (seconds less than 0 or greater than 359999).

**Performance:**

- The performance is efficient with a time complexity of O(1), meaning it takes the same amount of time regardless of input size.

**Best Practices:**

- The code adheres to some best practices, such as:
  - Input validation
  - Clear variable names
  - Breaking down calculations into steps

**Code Quality:**

- The code is generally well-formatted and readable.
- However, it could be further improved by:
  - Using more descriptive variable names (e.g., `remainingSeconds` instead of `remainingSec`)
  - Adding comments to explain the purpose of different steps
  - Avoiding the use of `this` within `padStart` (it's not necessary in this context)

**Alternative solution:**

Here's a slightly more concise and readable version:

<details>
<summary>View AI's Solution</summary>

```javascript
function humanReadableTime(seconds) {
  if (seconds < 0 || seconds > 359999) return;

  const hours = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const seconds = String(seconds % 60).padStart(2, "0");

  return `${hours}:${minutes}:${seconds}`;
}
```

</details>
<br >

**Comparison:**

| Feature        | Original Solution | Alternative Solution |
| -------------- | ----------------- | -------------------- |
| Functionality  | Correct           | Correct              |
| Performance    | O(1)              | O(1)                 |
| Best Practices | Good              | Slightly better      |
| Code Quality   | Good              | Slightly better      |

**Conclusion:**

Both solutions are valid and efficient in terms of performance. The alternative solution offers slightly better readability and adheres more closely to best practices. The choice between them depends on personal preferences and coding style guidelines.

**Ref:** https://www.codewars.com/kata/52685f7382004e774f0001f7/javascript
