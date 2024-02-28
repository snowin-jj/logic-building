# Add Two Numbers

You are given two _non-empty_ linked lists representing two non-negative integers. The digits are stored in _reverse order_, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

**Example 1:**

```
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
```

**Example 2:**

```
Input: l1 = [0], l2 = [0]
Output: [0]
```

**Example 3:**

```
Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
```

**Constraints:**

- The number of nodes in each linked list is in the range `[1, 100]`.
- `0 <= Node`. `val <= 9`
- It is guaranteed that the list represents a number that does not have leading `zeros`.

# My Version

<details>
<summary>View Solution</summary>

```javascript
var addTwoNumbers = function (l1, l2) {
  let carry = 0;
  let head = new ListNode(0);
  let curr = head;

  while (l1 || l2 || carry) {
    let sum = carry + (l1 ? l1.val : 0) + (l2 ? l2.val : 0);
    carry = Math.floor(sum / 10);
    curr.next = new ListNode(sum % 10);
    curr = curr.next;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }

  return head.next;
};
```

</details>
<br >

# AI's Review

**Functionality:**

- The code correctly adds two non-negative integers represented by linked lists in reverse order and returns the sum as a new linked list.

**Performance:**

- The time complexity is **O(max(m, n))**, where m and n are the lengths of the linked lists. This is because the loop iterates potentially over all nodes in the longer list.

**Best Practices:**

- The code is well-formatted and uses clear variable names.
- Using a dummy node simplifies handling edge cases and avoids checking for null before accessing the next node.
- Adding comments to explain specific steps, especially the handling of carry and the dummy node, would further improve readability.

**Alternative Solution:**

Here's a possible alternative solution that might be slightly more concise while achieving the same functionality:

<details>
<summary>View AI's Solution</summary>

```javascript
function addTwoNumbers(l1, l2) {
  let carry = 0;
  let head = (curr = new ListNode(0));

  while (l1 || l2 || carry) {
    const sum = (l1?.val || 0) + (l2?.val || 0) + carry;
    carry = Math.floor(sum / 10);
    curr.next = new ListNode(sum % 10);
    curr = curr.next;
    l1 = l1?.next;
    l2 = l2?.next;
  }

  return head.next;
}
```

</details>
<br >

This approach uses optional chaining (`?.`) to access the `val` property of potentially null `l1` and `l2` nodes, avoiding explicit null checks.

**Comparison:**

| Feature        | Original Solution | Alternative Solution (Optional Chaining) |
| -------------- | ----------------- | ---------------------------------------- |
| Functionality  | Correct           | Correct                                  |
| Performance    | O(max(m, n))      | O(max(m, n))                             |
| Best Practices | Good              | More concise, optional chaining          |
| Code Quality   | Readable          | More concise, cleaner null handling      |

**Choosing the Right Solution:**

- Both solutions achieve the same functionality and have comparable performance.
- The original solution might be preferred for its explicitness and potential readability for those unfamiliar with optional chaining.
- The alternative solution might be preferred for its conciseness and cleaner handling of potentially null values, especially for developers comfortable with optional chaining syntax.

Ultimately, the choice depends on your preference for coding style, readability, and familiarity with optional chaining.

**Ref:** https://leetcode.com/problems/add-two-numbers
