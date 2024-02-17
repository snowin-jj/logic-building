# Rearrange Array Elements by Sign

You are given a 0-indexed integer array nums of even length consisting of an equal number of positive and negative integers.

You should rearrange the elements of nums such that the modified array follows the given conditions:

- Every consecutive pair of integers have opposite signs.
- For all integers with the same sign, the order in which they were present in nums is preserved.
- The rearranged array begins with a positive integer.

Return the modified array after rearranging the elements to satisfy the aforementioned conditions.

**Example 1:**

Input: `nums = [3,1,-2,-5,2,-4]`

Output: `[3,-2,1,-5,2,-4]`

Explanation:
The positive integers in nums are `[3,1,2]`. The negative integers are `[-2,-5,-4]`.
The only possible way to rearrange them such that they satisfy all conditions is `[3,-2,1,-5,2,-4]`.
Other ways such as `[1,-2,2,-5,3,-4]`, `[3,1,2,-2,-5,-4]`, `[-2,3,-5,1,-4,2]` are incorrect because they do not satisfy one or more conditions.

**Example 2:**

Input: `nums = [-1,1]`

Output: `[1,-1]`

Explanation:
`1` is the only positive integer and `-1` the only negative integer in `nums`.
So nums is rearranged to `[1,-1]`.

# My Solution

<details>
<summary>View Solution</summary>

```javascript
function rearrangeArray(nums = []) {
  let result = [];

  // store positive and negative int seperate
  let positiveNums = [];
  let negativeNums = [];
  for (const num of nums) {
    if (num >= 0) positiveNums.push(num);
    else negativeNums.push(num);
  }

  // pair them with the index. eg: [+(0),-(0),.....]
  for (let i = 0; i < nums.length / 2; i++) {
    result.push(positiveNums[i]);
    result.push(negativeNums[i]);
  }

  return result;
}
```

</details>
<br >

# AI's Review

- **Performance:** The provided solution has a time complexity of O(n), where n is the length of the input array nums. This is efficient.
- **Best Practices:** The code follows good practices by using descriptive variable names and comments to explain the logic.
- **Code Quality:** The code is well-structured and readable, making it easy to understand the implementation.

### Alternative Solution:

Here's an alternative solution that achieves the same result but with a slightly different approach:

<details>
<summary>View AI's Solution</summary>

```javascript
function rearrangeArray(nums = []) {
  let positiveNums = nums.filter((num) => num >= 0);
  let negativeNums = nums.filter((num) => num < 0);

  let result = [];
  for (let i = 0; i < positiveNums.length; i++) {
    result.push(positiveNums[i]);
    result.push(negativeNums[i]);
  }

  return result;
}
```

</details>
<br >

### Comparison:

| Criteria       | Provided Solution | Alternative Solution |
| -------------- | ----------------- | -------------------- |
| Performance    | O(n)              | O(n)                 |
| Runtime        | Efficient         | Efficient            |
| Best Practices | Followed          | Followed             |
| Code Quality   | Good              | Good                 |

Both solutions have similar performance, runtime, follow best practices, and maintain good code quality. The alternative solution uses Array.filter() method to separate positive and negative numbers, which might offer a slight readability improvement. However, both solutions effectively solve the problem and are of high quality.

# Ref:

https://leetcode.com/problems/rearrange-array-elements-by-sign/description
