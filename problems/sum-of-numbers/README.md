# Sum of Numbers

Given two integers a and b, which can be positive or negative,
find the sum of all the integers between and including them and return it.
If the two numbers are equal return a or b.

**Note:** a and b are not ordered!

**Examples:**

(a, b) --> output

- (1, 0) --> 1 (1 + 0 = 1)
- (1, 2) --> 3 (1 + 2 = 3)
- (0, 1) --> 1 (0 + 1 = 1)
- (1, 1) --> 1 (1 since both are same)
- (-1, 0) --> -1 (-1 + 0 = -1)
- (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

# My version

```javascript
function getSum(a, b) {
  let sum = 0;
  let [startIndex, endIndex] = a > b ? [b, a] : [a, b];
  for (let i = startIndex; i <= endIndex; i++) {
    sum += i;
  }

  return sum;
}
```

# Chat GPT's Review

## Performance and Runtime:

The performance and runtime of this function are acceptable for most inputs. The time complexity is O(n), where n is the absolute difference between `a` and `b`. This is because the function iterates through each integer between and including `a` and `b`.

## Improvements Needed:

**Optimization for Large Inputs:** For very large input values of a and b, the function may take longer to execute due to the linear time complexity. If optimization for large inputs is required, alternative approaches such as using the arithmetic sum formula for consecutive integers can be considered.

## Good Aspects:

**Correctness:** The function correctly computes the sum of all integers between and including a and b, considering both positive and negative inputs.

## Improved Version:

```javascript
function getSum(a, b) {
  // Using arithmetic sum formula for consecutive integers
  const startIndex = Math.min(a, b);
  const endIndex = Math.max(a, b);
  return ((endIndex - startIndex + 1) * (startIndex + endIndex)) / 2;
}

console.log(getSum(1, 0));
```

## Performance Comparison:

The improved version of the function optimizes the computation of the sum using the arithmetic sum formula for consecutive integers, resulting in a constant time complexity of O(1). This significantly improves the performance for large inputs compared to the original version.

## My thoughts

O(n) ==> O(1).

My bad!!! I think I skipped my math classes. Oops!🤭
