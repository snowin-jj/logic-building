function primeFactors(num) {
  const factors = {};
  for (let i = 2; i * i <= num; i++) {
    while (num % i === 0) {
      factors[i] = (factors[i] || 0) + 1;
      num /= i;
    }
  }
  if (num > 1) {
    factors[num] = 1;
  }
  return factors;
}

function primesinNumbers(n) {
  const factors = primeFactors(n);
  const decomposition = primeFactorDecomposition(factors);
  return factors.length > 1 ? `(${decomposition})` : decomposition;
}

function primeFactorDecomposition(factors) {
  let result = "";
  for (const [prime, count] of Object.entries(factors)) {
    result += `(${prime}${count > 1 ? `**${count}` : ""})`;
  }
  return result;
}

console.log(primesinNumbers(86240));
