# Calculate the Sum Rounded Down

Given a positive integer `n` and a function `f`, calculate the result of `f([n/1]) + f([n/2]) + f([n/3]) + ... + f([n/n])`, where `[x]` denotes the largest integer not greater than x (e.g. `[2.5] = 2, [3] = 3`).
In this Kata, you need to write a function `calc(n, f)` to do the above.

**For example:**
When n = 5, f(x) = x,

```
calc(n, f) = f([5/1]) + f([5/2]) + f([5/3]) + f([5/4]) + f([5/5])
           = f(5) + f(2) + f(1) + f(1) + f(1)
           = 5 + 2 + 1 + 1 + 1 = 10.
```

When n = 10, f(x) = x,

```
calc(n, f) = f([10/1]) + f([10/2]) + f([10/3]) + f([10/4]) + f([10/5]) + f([10/6]) + f([10/7]) + f([10/8]) + f([10/9]) + f([10/10])
           = f(10) + f(5) + f(3) + f(2) + f(2) + f(1) + f(1) + f(1) + f(1) + f(1)
           = 10 + 5 + 3 + 2 + 2 + 1 + 1 + 1 + 1 + 1 = 27.
```

When n = 4, f(x) = x \* x,

```
calc(n, f) = f([4/1]) + f([4/2]) + f([4/3]) + f([4/4])
           = f(4) + f(2) + f(1) + f(1)
           = 16 + 4 + 1 + 1 = 22.
```

**Tips:**

We guarantee that all functions `f` are int64_t -> int64_t.
Also, `0 < n <= 1e10`.

If your program (unfortunately) times out, consider the following question: What is the maximum integer j satisfying `[n/i] = [n/j]` for any positive integers `n` and `i` (i <= n)?

# [Monadius's Solution](https://www.codewars.com/users/monadius)

<details>
<summary>View Solution</summary>

```javascript
function calc(n, f) {
  let r = 0n;
  for (let d = n; d >= 1n; ) {
    const k = n / d,
      d1 = n / (k + 1n);
    r += (d - d1) * f(k);
    d = d1;
  }
  return r;
}
```

</details>
<br >

**Ref:** https://www.codewars.com/kata/65c4f46193e1c29801e672f6/javascript
