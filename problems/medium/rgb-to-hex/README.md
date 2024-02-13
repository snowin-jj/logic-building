# RGB To Hex Conversion

The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

**Note:** Your answer should always be 6 characters long, the shorthand with 3 will not work here.

**Examples:**

```
255, 255, 255 --> "FFFFFF"
255, 255, 300 --> "FFFFFF"
0, 0, 0       --> "000000"
148, 0, 211   --> "9400D3"
```

# My Solution

<details>
<summary>View Solution</summary>
<br>

**Steps I followed:**

- validate the input: range btw 0 - 255
- divide them by 16(input / 16) - upper value
- find remainder of them (input % 16) - lower value
- convert lower and upper values to hex.
- combine upper + lower of each hex vaules. (red, green, blue)

```javascript
function rgbToHex(r = 255, g = 255, b = 255) {
  r = Math.max(Math.min(r, 255), 0);
  g = Math.max(Math.min(g, 255), 0);
  b = Math.max(Math.min(b, 255), 0);

  const upperR = Math.floor(r / 16).toString(16);
  const lowerR = Math.floor(r % 16).toString(16);
  const upperG = Math.floor(g / 16).toString(16);
  const lowerG = Math.floor(g % 16).toString(16);
  const upperB = Math.floor(b / 16).toString(16);
  const lowerB = Math.floor(b % 16).toString(16);

  return `${upperR}${lowerR}${upperG}${lowerG}${upperB}${lowerB}`.toUpperCase();
}
```

</details>
<br >

# AI's Solution

**Functionality:**

The code converts RGB values (0-255) to their hexadecimal string representation (#XXXXXX) while handling invalid inputs gracefully. It passes all provided test cases.

**Performance:**

- The time complexity of O(1) is efficient for individual conversions.
- For many conversions, consider vectorization or bitwise operations for potential optimizations.

**Best Practices:**

- The code is generally well-formatted and uses descriptive variable names.
- You can improve clarity by adding comments explaining the logic behind each step.

**Code Quality:**

- While the current solution works, a more concise and potentially faster alternative using bitwise operations exists:

<details>
<summary>View AI's Solution</summary>

```javascript
function rgbToHex(r, g, b) {
  // Clamp and convert individual values to hex with padding:
  const clampedR = (Math.max(0, Math.min(r, 255)) & 0xff)
    .toString(16)
    .padStart(2, "0");
  const clampedG = (Math.max(0, Math.min(g, 255)) & 0xff)
    .toString(16)
    .padStart(2, "0");
  const clampedB = (Math.max(0, Math.min(b, 255)) & 0xff)
    .toString(16)
    .padStart(2, "0");

  // Combine and return the final hex string:
  return `#${clampedR}${clampedG}${clampedB}`;
}
```

</details>
<br >

This approach combines clamping, conversion, and padding in a single step using bitwise operations.

**Comparison:**

| Feature        | Original Solution | Alternative Solution  |
| -------------- | ----------------- | --------------------- |
| Functionality  | Correct           | Correct               |
| Performance    | O(1) (individual) | O(1) (individual)     |
| Best Practices | Good              | Good, could be better |
| Code Quality   | Readable          | More concise          |
| Readability    | Slightly less     | More readable         |

**Choosing the Right Solution:**

- If clarity and ease of understanding are priorities, the original solution with additional comments is good.
- If compactness and potential performance are a concern, the alternative solution is preferable.

**Ref:** https://www.codewars.com/kata/513e08acc600c94f01000001/javascript
