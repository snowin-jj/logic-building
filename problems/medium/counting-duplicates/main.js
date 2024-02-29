function countDuplicate(string) {
  const letterCount = {};
  let repeatedLettersCount = 0;
  Array.from(string).forEach((l) => {
    const letter = l.toLowerCase();
    if (letterCount[letter]) {
      letterCount[letter] += 1;
    } else {
      letterCount[letter] = 1;
    }
  });

  for (const [_key, value] of Object.entries(letterCount)) {
    if (value > 1) repeatedLettersCount++;
  }
  return repeatedLettersCount;
}

console.log(countDuplicate("Indivisibilities"));
