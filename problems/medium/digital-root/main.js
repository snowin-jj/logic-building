function splitAndSum(num) {
  let sum = 0;
  String(num)
    .split("")
    .forEach((n) => (sum += parseInt(n)));
  return sum;
}

function sumOfDigits(number = 10) {
  let summedNumber = splitAndSum(number);

  while (String(summedNumber).length > 1) {
    summedNumber = splitAndSum(summedNumber);
  }

  return summedNumber;
}

console.log(sumOfDigits(132189));
