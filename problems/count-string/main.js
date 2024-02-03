function count(string) {
  const results = new Map();

  string.split("").forEach((l) => {
    if (results.has(l)) {
      results.set(l, results.get(l) + 1);
    } else {
      results.set(l, 1);
    }
  });

  return Object.fromEntries(results);
}

console.log(count("aylabayu"));
