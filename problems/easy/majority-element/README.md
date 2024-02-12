# Majority Element

Given an array nums of size n, return the majority element.

The majority element is the element that appears more than `⌊n / 2⌋` times. You may assume that the majority element always exists in the array.

**Example 1:**

```
Input: nums = [3,2,3]
Output: 3
```

**Example 2:**

```
Input: nums = [2,2,1,1,1,2,2]
Output: 2
```

# My Solution

<details>
<summary>View Solution</summary>

```javascript
function majorityElement(arr = []) {
  const itemsCount = {};

  for (let i = 0; i < arr.length; i++) {
    const currentItem = arr[i];
    if (itemsCount[currentItem] in arr) {
      itemsCount[currentItem] += 1;
    } else {
      itemsCount[currentItem] = 1;
    }
  }

  let majority = arr[0];
  for (let [key, value] of Object.entries(itemsCount)) {
    if (value > itemsCount[majority]) majority = key;
  }

  return majority;
}
```

</details>
<br >

# AI's Review

**Functionality:**

- The code correctly finds the majority element in an array, which appears more than half the times.
- It handles edge cases like an empty array.

**Performance:**

- The current approach has a time complexity of **O(n)** due to the two loops: one for iterating through the array and another for iterating through the object.
- While not overly slow, it's not the most efficient solution for large arrays.

**Best Practices:**

- The code is generally well-formatted and uses descriptive variable names.
- However, using an object to store occurrences might not be the most efficient approach in terms of space complexity.

**Code Quality:**

- The code lacks comments to explain the logic behind each step.
- The check for `currentItem` existing in `arr` before incrementing its count is unnecessary.

**Alternative Solution:**

There are two more efficient solutions for finding the majority element:

1. **Boyer-Moore Majority Vote Algorithm:** This algorithm has a linear time complexity (O(n)) and constant space complexity (O(1)). It utilizes the fact that if there is a majority element, removing all other elements twice won't affect it.
2. **Sorting:** Although sorting has a higher time complexity of O(n log n), it's also a viable option for small arrays or when sorting is already required for other purposes. The majority element will be the middle element after sorting.

Here's the Boyer-Moore Majority Vote Algorithm implementation:

<details>
<summary>View AI's Solution</summary>

```javascript
function majorityElement(arr = []) {
  let count = 0,
    candidate = null;

  for (const num of arr) {
    if (count === 0) {
      candidate = num;
    }
    count += num === candidate ? 1 : -1;
  }

  return candidate;
}
```

</details>
<br >

**Comparison:**

| Feature          | Original Solution | Boyer-Moore   | Sorting    |
| ---------------- | ----------------- | ------------- | ---------- |
| Functionality    | Correct           | Correct       | Correct    |
| Performance      | O(n)              | O(n)          | O(n log n) |
| Space Complexity | O(n)              | O(1)          | O(1)       |
| Best Practices   | Not optimal       | Best practice | Can be     |
| Code Quality     | Basic             | Moderate      | Moderate   |

**Conclusion:**

While the original solution is functional, the Boyer-Moore algorithm is a more efficient and space-saving choice for most cases. Consider the trade-off between performance and readability/simplicity when deciding which solution to use.

**Ref:** https://leetcode.com/problems/majority-element/description
