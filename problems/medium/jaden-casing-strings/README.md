# Jaden Casing Strings

Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

**Example:**

```
Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased: "How Can Mirrors Be Real If Our Eyes Aren't Real"
```

# My version

<details>
<summary>View Solution</summary>

```javascript
function capitalize(value = "") {
  let input = value.split(" ");
  let result = "";

  for (let i = 0; i < input.length; i++) {
    let currentWord = input[i];
    let capitalizedWord = "";
    for (let j = 0; j < currentWord.length; j++) {
      const letter = currentWord[j];
      if (j === 0) capitalizedWord += letter.toUpperCase();
      else capitalizedWord += letter;
    }

    if (i === input.length - 1) result += `${capitalizedWord}`;
    else result += `${capitalizedWord} `;
  }

  return result;
}
```

</details>
<br >

# Chat GPT's Review

**1. Correctness:**

The code aims to capitalize each word in a given string according to the style commonly seen in Jaden Smith's tweets.
It correctly splits the input string into an array of words and capitalizes the first letter of each word.

**2. Performance:**

The time complexity of the `capitalize` function depends on the length of the input string and the number of words in it.
The nested loop iterates over each character of each word, resulting in a time complexity of approximately `O(n*m)`, where n is the number of words and m is the average length of a word.
The space complexity is O(n), where n is the number of words, due to the creation of arrays and strings.

**3. Improvement:**

The code can be optimized by using built-in JavaScript functions or regular expressions to capitalize the first letter of each word, which would reduce the time complexity.

Here's an improved version of the code using regular expressions for capitalization:

<details>
<summary>View GPT's Solution</summary>

```javascript
function capitalize(value = "") {
  return value.replace(/\b\w/g, (char) => char.toUpperCase());
}
```

</details>
<br >

This version uses a regular expression `(\b\w)` to match the first letter of each word and then applies the `toUpperCase` function to capitalize it. The `replace` function is used to replace each matched letter with its uppercase version. This approach simplifies the code and improves performance compared to the nested loop approach.

## My thoughts

Regex? 🤔

**Ref:**
https://www.codewars.com/kata/5390bac347d09b7da40006f6/javascript
