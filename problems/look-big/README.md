# Narcissistic Number Check

A Narcissistic Number (or Armstrong Number) is a positive number which is
the sum of its own digits, each raised to the power of the number of digits in a given base.
In this Kata, we will restrict ourselves to decimal (base 10).

For example, take 153 (3 digits), which is narcissistic:

1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
and 1652 (4 digits), which isn't:
1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938

The Challenge:

- Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10.
- This may be True and False in your language, e.g. PHP.
- Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.

# My Version

```javascript
function narcissistic(value) {
  const values = String(value).split("");
  let sum = 0;

  values.forEach((v) => {
    sum += parseInt(v) ** String(value).length;
  });

  return sum === value;
}
```

# Chat GPT's Review

## Performance and Runtime:

The performance and runtime of this function are efficient. The time complexity is O(d), where d is the number of digits in the input number. This is because the function iterates through each digit once.

## Improvements Needed:

**1. Type Conversion:** The function uses parseInt to convert each character to an integer. This is not necessary since JavaScript automatically converts strings to numbers in arithmetic operations. So, parseInt can be omitted.

**2. Redundant String Conversion:** The expression String(value).length is computed multiple times unnecessarily. It can be computed once and stored in a variable for efficiency.

## Good Aspects:

**Readability:** The function is easy to understand and follows the logic described in the problem statement.

**Robustness:** The function handles only valid positive non-zero integers as required.

## Improved Version:

```javascript
function narcissistic(value) {
  const digits = String(value);
  const numDigits = digits.length;
  let sum = 0;

  for (let i = 0; i < numDigits; i++) {
    sum += Number(digits[i]) ** numDigits;
  }

  return sum === value;
}
```

## Performance Comparison:

The performance of this function is comparable to other solutions for checking narcissistic numbers. However, the improvements mentioned could optimize the function slightly.
