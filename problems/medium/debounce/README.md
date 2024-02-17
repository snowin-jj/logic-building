# Debounce

Given a function `fn` and a time in milliseconds `t`, return a debounced version of that function.

A debounced function is a function whose execution is delayed by `t` milliseconds and whose execution is cancelled if it is called again within that window of time. The debounced function should also receive the passed parameters.

For example, let's say `t = 50ms`, and the function was called at `30ms, 60ms, and 100ms`. The first 2 function calls would be cancelled, and the 3rd function call would be executed at `150ms`. If instead `t = 35ms`, The 1st call would be cancelled, the 2nd would be executed at `95ms`, and the 3rd would be executed at `135ms`.

  <img src="./debounce.png" alt="debounce chart" style="width:500px; display: block;"/>
<br>
The above diagram shows how debounce will transform events. Each rectangle represents 100ms and the debounce time is `400ms`. Each color represents a different set of inputs.

Please solve it without using lodash's `\_.debounce()` function.

**Example 1:**

Input:

```
t = 50
calls = [
  {"t": 50, inputs: [1]},
  {"t": 75, inputs: [2]}
]
```

Output: `[{"t": 125, inputs: [2]}]`

Explanation:

```
let start = Date.now();
function log(...inputs) {
  console.log([Date.now() - start, inputs ])
}
const dlog = debounce(log, 50);
setTimeout(() => dlog(1), 50);
setTimeout(() => dlog(2), 75);
```

The 1st call is cancelled by the 2nd call because the 2nd call occurred before 100ms
The 2nd call is delayed by 50ms and executed at 125ms. The inputs were (2).

**Example 2:**

Input:

```
t = 20
calls = [
  {"t": 50, inputs: [1]},
  {"t": 100, inputs: [2]}
]
```

Output: `[{"t": 70, inputs: [1]}, {"t": 120, inputs: [2]}]`

Explanation:
The 1st call is delayed until 70ms. The inputs were (1).
The 2nd call is delayed until 120ms. The inputs were (2).

**Example 3:**

Input:

```
t = 150
calls = [
  {"t": 50, inputs: [1, 2]},
  {"t": 300, inputs: [3, 4]},
  {"t": 300, inputs: [5, 6]}
]
```

Output: `[{"t": 200, inputs: [1,2]}, {"t": 450, inputs: [5, 6]}]`

Explanation:
The 1st call is delayed by 150ms and ran at 200ms. The inputs were (1, 2).
The 2nd call is cancelled by the 3rd call
The 3rd call is delayed by 150ms and ran at 450ms. The inputs were (5, 6).

# My Solution

<details>
<summary>View Solution</summary>

```javascript
function debounce(fn, t) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), t);
  };
}
```

</details>
<br >

# AI's solution

**Functionality:**

- The code correctly implements a debounce function, ensuring that the wrapped function is executed only once after a specified delay, even if it's called multiple times within that window.

**Performance:**

- The time complexity is effectively **O(1)** for each call, as it primarily involves clearing and setting timeouts.
- However, it's important to note that debounced functions can introduce a delay in execution, which might impact overall performance depending on the use case.

**Best Practices:**

- The code adheres to common best practices, such as using clear variable names and a concise implementation.
- It could be further improved by adding comments to explain the logic behind clearing and resetting the timeout.

**Alternative Solution:**

While the current solution is efficient and widely used, here's an alternative using a closure that might be considered for specific scenarios:

```javascript
function debounce(fn, t) {
  let pendingCall = null;
  return function (...args) {
    pendingCall = clearTimeout(pendingCall);
    pendingCall = setTimeout(() => fn.apply(this, args), t);
  };
}
```

This approach avoids using a `timer` variable outside the closure, potentially enhancing readability and reducing potential for naming conflicts. However, the performance and functionality are essentially equivalent.

**Comparison:**

| Feature        | Original Solution | Alternative Solution            |
| -------------- | ----------------- | ------------------------------- |
| Functionality  | Correct           | Correct                         |
| Performance    | O(1)              | O(1), similar                   |
| Best Practices | Good              | Good, potentially more readable |
| Code Quality   | Readable          | Slightly more concise           |

**Choosing the Right Solution:**

- Both solutions are valid and have similar performance characteristics.
- The choice often depends on personal preferences regarding code style and variable scoping.
- If readability and avoiding potential naming conflicts are priorities, the alternative solution might be preferred.

Remember that the key consideration for debounce functions is understanding their intended use and potential performance implications in the context of your application.

# Ref:

https://leetcode.com/problems/debounce/description
