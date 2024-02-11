# Moving Zeros To The End

Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

```javascript
moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]); // returns[false,1,1,2,1,3,"a",0,0]
```

# My Solution

<details>
<summary>View Solution</summary>

```javascript
function moveZeros(arr = []) {
  let zerosArr = [];
  return arr
    .filter((item) => {
      if (item === 0) {
        zerosArr.push(0);
      } else {
        return item !== 0;
      }
    })
    .concat(zerosArr);
}
```

</details>
<br >

# AI' Review

**Functionality:**

The code successfully fulfills the task of moving all zeros to the end of the array while preserving the order of non-zero elements. It handles non-numeric values like `"a"` correctly.

**Performance:**

- The solution uses two filters and a concat operation, resulting in a time complexity of O(n^2) in the worst case, where n is the length of the array. This can be slow for large arrays.

**Best Practices:**

- The two-step approach (filtering non-zeros and then adding zeros) slightly deviates from common practices.
- Using `===` for strict equality is recommended instead of loose equality (`==`) which can lead to unexpected behavior.

**Code Quality:**

- The code is generally readable and well-formatted.
- Variable names are clear and descriptive.
- Comments explain the purpose of the function and the steps involved.

## Alternative solution:

Here's an alternative solution that utilizes a two-pointer approach, improving performance and adhering to best practices:

<details>
<summary>View AI's Solution</summary>

```javascript
function moveZeros(arr = []) {
  // Initialize pointers
  let nonZeroIndex = 0;

  // Iterate through the array
  for (let i = 0; i < arr.length; i++) {
    // Check if current element is non-zero
    if (arr[i] !== 0) {
      // If yes, swap it with element at nonZeroIndex and increment nonZeroIndex
      [arr[i], arr[nonZeroIndex]] = [arr[nonZeroIndex], arr[i]];
      nonZeroIndex++;
    }
  }

  // SWAPPING LOGIC
  /**
   * [0, 1, 2, 0, 3]
   * i=0, nz=0; no swap => [0, 1, ....]
   * i=1, nz=0; [1(index), 0(index)] = [0(index), 1(index)] => [1, 0]
   *
   *  Put the value of the index 1 in the index of 0. i.e:  1 => index O
   *  Put the value of the index 0 in the index of 1. i.e:  0 => index 1
   *
   * Updated array: [1, 0, 2, 0, 3]
   * i=2, nz=1; [2(index), 1(index)] = [1(index), 2(index)] => [1, 2, 0]
   *
   *  Put the value of the index 2 in the index of 1. i.e:  2 => index 1
   *  Put the value of the index 1 in the index of 2. i.e:  0 => index 2
   *
   * Updated array: [1, 2, 0, 0, 3]
   * i=3, nz=2; no swap
   *
   * Updated array: [1, 2, 0, 0, 3]
   * i=4, nz=2; [3(index), 2(index)] = [2(index), 3(index)] => [0, 0]
   *
   *  Put the value of the index 3 in the index of 2. i.e:  0 => index 2
   *  Put the value of the index 2 in the index of 3. i.e:  0 => index 3
   *
   *  .......
   */

  // Return the modified array
  return arr;
}

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));
```

</details>
<br >

## Comparison:

| Feature            | Original Solution | Alternative Solution |
| ------------------ | ----------------- | -------------------- |
| **Performance**    | O(n^2)            | O(n)                 |
| **Best Practices** | Partially         | Yes                  |
| **Code Quality**   | Good              | Good                 |
| **Memory Usage**   | Lower             | Lower                |

The alternative solution offers significantly better performance due to its O(n) complexity and adheres to best practices by using strict equality and a more efficient approach. Both solutions have similar memory usage.

## Conclusion:

The alternative solution is a better choice due to its superior performance and adherence to best practices. It demonstrates a more efficient approach to achieve the same outcome while maintaining good code quality.

**Ref:** https://www.codewars.com/kata/52597aa56021e91c93000cb0/javascript
