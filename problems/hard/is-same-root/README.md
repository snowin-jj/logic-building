# Same Tree

Given the roots of two binary trees `p` and `q`, write a function to check if they are the same or not. Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

**Example 1:**

```
Input: p = [1,2,3], q = [1,2,3]
Output: true
```

**Example 2:**

```
Input: p = [1,2], q = [1,null,2]
Output: false
```

**Example 3:**

```
Input: p = [1,2,1], q = [1,1,2]
Output: false
```

# My Version

<details>
<summary>View Solution</summary>

At first, I assumed that `p` and `q` were _arrays_. After certain test cases failed, I was unsure whether the `array.length` attribute existed on p and q, and if not, what type these two variables would be. Then, after carefully reading the question and sample code, I understood that the types of `p` and `q` are **TreeNodes**. Oops... 😅

```javascript
var isSameTree = function (p, q) {
  // both trees are null
  if (!p && !q) return true;
  // one of p and q is null
  if (!q || !p) return false;
  if (p.val !== q.val) return false;
  return isSameTree(p.right, q.right) && isSameTree(p.left, q.left);
};
```

</details>
<br >

# AI's Review

**Functionality:**

- The code correctly checks if two binary trees are structurally identical and have the same values at each node.

**Performance:**

- The time complexity is **O(n)**, where n is the number of nodes in the trees. This is because the function iterates potentially over all nodes in the worst case.

**Best Practices:**

- The code is generally well-formatted and uses descriptive variable names.
- Consider adding comments to explain the base cases and recursive calls for improved readability.

**Alternative Solution:**

Here's an alternative solution using a single recursion with early termination:

<details>
<summary>View AI's Solution</summary>

```javascript
function isSameTree(p, q) {
  if (!p && !q) return true; // Both null
  if (!q || !p || p.val !== q.val) return false; // One is null or values differ

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}
```

</details>
<br >

This approach combines the base cases and avoids redundant checks by returning `false` if any check fails early.

**Comparison:**

| Feature        | Original Solution | Alternative Solution (Early Termination)        |
| -------------- | ----------------- | ----------------------------------------------- |
| Functionality  | Correct           | Correct                                         |
| Performance    | O(n)              | O(n)                                            |
| Best Practices | Good              | More concise, potential readability improvement |
| Code Quality   | Readable          | More concise, early termination reduces code    |

**Choosing the Right Solution:**

- Both solutions have the same performance characteristics.
- The original solution might be preferred for its explicit base cases.
- The alternative solution might be preferred for its conciseness and potentially reduced redundancy in checks.

Ultimately, the choice depends on your preference for readability, coding style, and potential performance optimization for very large trees.

**Ref:** https://leetcode.com/problems/same-tree/description
