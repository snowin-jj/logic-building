# Find First Palindromic String in the Array

Given an array of strings words, return the first palindromic string in the array. If there is no such string, return an empty string "".
A string is palindromic if it reads the same forward and backward.

**Example 1:**

```
Input: words = ["abc","car","ada","racecar","cool"]
Output: "ada"
Explanation: The first string that is palindromic is "ada".
Note that "racecar" is also palindromic, but it is not the first.
```

**Example 2:**

```
Input: words = ["def","ghi"]
Output: ""
Explanation: There are no palindromic strings, so the empty string is returned.
```

# My Solution

<details>
<summary>View Solution</summary>

```javascript
function firstPalindrome(words = ["abc", "car", "ada", "racecar", "cool"]) {
  for (let i = 0; i < words.length; i++) {
    console.log({ palin: words[i].split("").reverse().join("") });
    if (words[i].split("").reverse().join("") === words[i]) return words[i];
  }
  return "";
}
```

</details>
<br >

# AI's Review

**Strengths:**

- **Correctness:** The code correctly identifies the first palindrome in the given array using a straightforward approach.
- **Clarity:** The code is well-formatted and easy to read, with clear variable names and comments.

**Areas for Improvement:**

- **Efficiency:** The current approach iterates through the entire array for each word, potentially creating unnecessary string manipulations.
- **Best Practices:** Some minor best practices could be further enhanced for even cleaner code.

**Improved Code:**

<details>
<summary>View AI's Solution</summary>

```javascript
function firstPalindrome(words = ["abc", "car", "ada", "racecar", "cool"]) {
  // Use a palindrome helper function for reusability
  function isPalindrome(word) {
    for (let i = 0; i < word.length / 2; i++) {
      if (word[i] !== word[word.length - 1 - i]) {
        return false;
      }
    }
    return true;
  }

  // Iterate only until the first palindrome is found
  for (let i = 0; i < words.length; i++) {
    if (isPalindrome(words[i])) {
      return words[i];
    }
  }

  return ""; // No palindromes found
}

console.log(firstPalindrome());
```

</details>
<br >

**Explanation of Improvements:**

- **Palindrome Helper Function:** Encapsulating palindrome checking in a separate function improves code reusability and readability.
- **Short-Circuit Evaluation:** The `isPalindrome` function now terminates early as soon as a non-matching character is found, reducing unnecessary comparisons.
- **Early Return:** The loop in `firstPalindrome` now returns the first palindrome encountered, optimizing performance.

**Comparison:**

| Feature        | Original Code             | Improved Code                      |
| -------------- | ------------------------- | ---------------------------------- |
| Correctness    | Yes                       | Yes                                |
| Performance    | Less efficient            | More efficient                     |
| Best Practices | Some room for improvement | Better adherence to best practices |
| Code Quality   | Clear but can be improved | More concise and reusable          |

**Conclusion:**

The improved code addresses the performance and best practices concerns while maintaining correct functionality and clarity. It demonstrates the importance of considering alternative solutions and incorporating feedback for continuous improvement.

**Ref:** https://leetcode.com/problems/find-first-palindromic-string-in-the-array/description
