/**
 * Simple Pig Latin
 *
 * Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation
 * marks untouched.
 *
 * Examples
 * pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
 * pigIt('Hello world !');     // elloHay orldway !
 *
 */

// split the str to arr
// get the word
// slice the word => 1st only and without the 1st letter
// push the updated word to the original arr

function pigIt(value = "") {
  const punctuationMarks = [
    "?",
    "!",
    ".",
    ",",
    ":",
    ";",
    "(",
    ")",
    "[",
    "]",
    "{",
    "}",
    "-",
    "_",
    "'",
    "...",
  ];
  return value
    .split(" ")
    .map((word) => {
      return `${word.slice(1)}${word.slice(0, 1)}${
        punctuationMarks.includes(word) ? "" : "ay"
      }`;
    })
    .join(" ");
}

console.log(pigIt("Pig latin is cool"));
