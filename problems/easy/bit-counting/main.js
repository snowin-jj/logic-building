function countBits(decimal) {
  let quotient = decimal;
  let remainder;
  let bitCount = 0;

  while (quotient > 0) {
    remainder = Math.floor(quotient % 2);
    quotient = Math.floor(quotient / 2);
    remainder === 1 && bitCount++;
  }

  return bitCount;
}

console.log(countBits(7));
