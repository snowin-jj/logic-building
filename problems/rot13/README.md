# ROT13 Cipher

ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar ciphers

- Create a function that takes a string and returns the string ciphered with Rot13.
- If there are numbers or special characters included in the string, they should be returned as they are.
- Only letters from the latin/english alphabet should be shifted, like in the original Rot13 `implementation`.

  <br >

  <img src="./ROT13.png" alt="drawing" style="width:500px; display: block; margin-inline: auto"/>

  <br >

# My version

<details>
<summary>View Solution</summary>

```javascript
function rot13(str) {
  return str.replace(/[a-zA-Z]/g, function (char) {
    var charCode = char.charCodeAt(0);
    var offset = charCode <= 90 ? 65 : 97;
    return String.fromCharCode(((charCode - offset + 13) % 26) + offset);
  });
}
```

</details>
<br >

# Chat GPT's Review

## Performance and Runtime:

The performance and runtime of this function are efficient. The time complexity is O(n), where n is the length of the input string. This is because the function iterates through each character in the string once.

## Improvements Needed:

**Regex Replacement:** The function uses a regular expression with the global flag `/[a-zA-Z]/g` to match all letters in the string. While this works fine, it might be more efficient to directly loop through the characters of the string and perform the ROT13 transformation.

**Code Clarity:** The variable names char, charCode, and offset are clear and descriptive. However, adding comments or documentation to explain the ROT13 transformation logic would improve code clarity and understanding.

## Good Aspects:

**Simplicity:** The function is simple and concise, implementing the ROT13 cipher efficiently.

**Correctness:** The function correctly handles only letters from the Latin/English alphabet, leaving numbers and special characters unchanged.

## Improved Version:

<details>
<summary>View GPT's Solution</summary>

```javascript
function rot13(str) {
  var result = "";
  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    if (/[a-zA-Z]/.test(char)) {
      var charCode = char.charCodeAt(0);
      var offset = charCode <= 90 ? 65 : 97;
      var rotatedCharCode = ((charCode - offset + 13) % 26) + offset;
      result += String.fromCharCode(rotatedCharCode);
    } else {
      result += char;
    }
  }
  return result;
}
```

</details>
<br >

## Performance Comparison:

The performance of the improved version is comparable to the original solution. However, the improved version offers better code clarity and readability by directly looping through the characters of the string and applying the ROT13 transformation.
