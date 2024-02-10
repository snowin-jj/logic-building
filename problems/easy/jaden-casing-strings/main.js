function capitalize(value = "") {
  let input = value.split(" ");
  let result = "";

  for (let i = 0; i < input.length; i++) {
    let currentWord = input[i];
    let capitalizedWord = "";
    for (let j = 0; j < currentWord.length; j++) {
      const letter = currentWord[j];
      if (j === 0) capitalizedWord += letter.toUpperCase();
      else capitalizedWord += letter;
    }

    if (i === input.length - 1) result += `${capitalizedWord}`;
    else result += `${capitalizedWord} `;
  }

  return result;
}

console.log(capitalize("How can mirrors be real if our eyes aren't real"));
