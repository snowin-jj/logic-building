/**
 * ---------------------
 * tribonacci-sequence
 * ---------------------
 * 

 */

function tribonacci(input, n) {
  if (n === 0) return [];

  let result = input;
  let appendIdx = input.length;

  if (n <= appendIdx) {
    return result.slice(0, n);
  }

  for (let i = 0; i < n && appendIdx < n; i++, appendIdx++) {
    const tribonacciNum =
      result[appendIdx - 1] + result[appendIdx - 2] + result[appendIdx - 3];
    result.push(tribonacciNum);
  }

  return result;
}

console.log(tribonacci([0, 0, 20], 2));
