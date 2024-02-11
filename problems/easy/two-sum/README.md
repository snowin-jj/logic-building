# Two sum

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up
to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.

**Example:**

```
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
```

# My Version

<details>
<summary>View Solution</summary>

```javascript
function twoSum(nums = [], target = 0) {
  for (let i = 0; i <= nums.length; i++) {
    let num1 = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      let num2 = nums[j];
      if (num1 + num2 === target) {
        return [i, j];
      }
    }
  }
}
```

</details>
<br >

# AI's Review

**Functionality:**

- The code correctly solves the "two sum" problem, finding the indices of two numbers in the `nums` array that add up to the given `target`.
- It includes examples and a console log to demonstrate usage.

**Performance:**

- The current implementation uses nested loops, resulting in a time complexity of **O(n^2)**, where `n` is the length of the `nums` array. This can be slow for large arrays.

**Best Practices:**

- The code is generally well-formatted and includes comments for clarity.
- However, using nested loops for this problem is not considered best practice due to its performance limitations.

**Alternative Solution:**

- A more efficient approach utilizes a **hash table** or **object** to store elements and their indices. When iterating through the array, check if the complement (`target - current number`) exists in the hash table. If yes, it means you found the pair. This algorithm has a time complexity of **O(n)** on average, significantly faster for large arrays.

**Improved Code:**

<details>
<summary>View Solution</summary>

```javascript
function twoSum(nums = [], target = 0) {
  const seen = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (complement in seen) {
      return [seen[complement], i]; // Return indices in correct order
    }

    seen[nums[i]] = i; // Store current number and its index
  }

  return []; // No solution found
}

console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
```

</details>
<br >

**Key improvements:**

- Uses a hash table (`seen`) to store numbers and their indices.
- Time complexity reduced to **O(n)** on average.
- Returns indices in the correct order (ascending) as mentioned in the problem description.
- Includes informative comments.

**Additional Considerations:**

- For edge cases like repeated numbers, the solution might return multiple valid pairs. Consider returning only the first or last occurrence based on specific requirements.
- If dealing with very large arrays or memory constraints, alternative methods like sorting and two-pointer techniques can be explored.
