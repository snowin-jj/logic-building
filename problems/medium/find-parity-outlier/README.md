# Find The Parity Outlier

You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

**Examples:**

```
[2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)
```

# My Version

<details>
<summary>View Solution</summary>

```javascript
function findOutlier(nums = []) {
  const arrayTypes = {
    even: [],
    odd: [],
  };
  for (const num of nums) {
    if (num % 2 === 0) arrayTypes["even"].push(num);
    else arrayTypes["odd"].push(num);
  }

  return arrayTypes.even.length > arrayTypes.odd.length
    ? arrayTypes.odd[0]
    : arrayTypes.even[0];
}
```

</details>
<br >

# AI's Review

The provided solution for the `findOutlier` function is a valid approach to solve the problem. It separates the input array into two arrays: one for even numbers and one for odd numbers. Then, it returns the first element of the array with the smaller length, which is the outlier.

Code Review:

1. **Functionality**: The code correctly handles the given examples and should work for any valid input array.

2. **Readability**: The code is well-structured and easy to understand. The use of an object (`arrayTypes`) to store the even and odd arrays is a clever way to organize the data.

3. **Performance**: The solution has a time complexity of O(n), where n is the length of the input array, as it iterates through the array once. This is an acceptable performance for most use cases.

4. **Best Practices**: The code follows several best practices, such as using `const` for variables that don't change, using a `for...of` loop to iterate over the array, and using descriptive variable names.

Alternative Solution:

While the provided solution is already quite good, here's an alternative solution that slightly improves code quality and conciseness:

<details>
<summary>View AI's Solution</summary>

```javascript
function findOutlier(nums) {
  const evenCount = nums.filter((num) => num % 2 === 0).length;
  const oddCount = nums.length - evenCount;

  return evenCount > 1
    ? nums.find((num) => num % 2 !== 0)
    : nums.find((num) => num % 2 === 0);
}
```

</details>
<br >

In this solution:

1. The `filter` method is used to count the number of even and odd numbers in the input array.
2. The outlier is determined by checking if the count of even numbers is greater than 1 (meaning the outlier is odd) or not (meaning the outlier is even).
3. The `find` method is used to retrieve the outlier value from the input array.

Comparison:

- **Performance**: Both solutions have a time complexity of O(n), but the alternative solution may be slightly faster due to fewer iterations and operations.
- **Readability**: The original solution is more explicit and easier to understand for beginners, while the alternative solution is more concise and may be preferred by experienced developers.
- **Best Practices**: Both solutions follow best practices, but the alternative solution is more concise and uses array methods more effectively.

In summary, while the original solution is perfectly valid and easy to understand, the alternative solution is slightly more efficient, follows best practices more closely, and has better code quality in terms of conciseness and the effective use of array methods. However, the choice between the two solutions may depend on personal preference and the target audience for the code (beginners vs. experienced developers).

**Ref:**
https://www.codewars.com/kata/5526fc09a1bbd946250002dc
