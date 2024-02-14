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
console.log(calc(5n, (x) => x));
