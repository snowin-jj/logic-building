function narcissistic(value) {
  const values = String(value).split("");
  let sum = 0;

  values.forEach((v) => {
    sum += parseInt(v) ** String(value).length;
  });

  return sum === value;
}

console.log(narcissistic(153));
