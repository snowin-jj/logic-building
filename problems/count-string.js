/**
 * The main idea is to count all the occurring characters in a string. 
 * If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
 * What if the string is empty? Then the result should be empty object literal, {}.

 */

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
