/**
 * Adding Big Numbers
 * 

Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

 Example:
    add("123", "321"); -> "444"
    add("11", "99");   -> "110"

Notes:
- The input numbers are big.
- The input is a string of only digits
- The numbers are positives

 */

function sumOfBigNumbers(num1, num2) {
  let carry = 0;
  let result = "";

  // Pad the shorter number with leading zeros to match the lengths
  const maxLength = Math.max(num1.length, num2.length);
  num1 = num1.padStart(maxLength, "0");
  num2 = num2.padStart(maxLength, "0");

  // Perform addition from right to left
  for (let i = maxLength - 1; i >= 0; i--) {
    const digitSum = parseInt(num1[i]) + parseInt(num2[i]) + carry;
    result = (digitSum % 10) + result; // Add the rightmost digit to the result
    carry = Math.floor(digitSum / 10); // Calculate the carry for the next iteration
  }

  // Add any remaining carry
  if (carry > 0) {
    result = carry + result;
  }

  return result;
}

// expected: 91002328220491911630239667963
console.log(
  sumOfBigNumbers("63829983432984289347293874", "90938498237058927340892374089")
);
