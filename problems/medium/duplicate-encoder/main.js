function duplicateEncoder(word = "") {
  const letterCount = {};
  let result = "";

  // loop through the string
  word.split("").forEach((letter) => {
    const l = letter.toLowerCase();
    // count the letters
    if (letterCount[l]) letterCount[l] = letterCount[l] + 1;
    else letterCount[l] = 1;
  });

  console.log("counted letters:", letterCount);

  // if count > 1 replace by ")" else "("
  word.split("").forEach((letter) => {
    const l = letter.toLowerCase();
    if (letterCount[l] > 1) result += ")";
    else result += "(";
  });

  return result;
}
