function splitString(value = "") {
  const numOfPairs = Math.round(value.length / 2);
  const pairs = [];

  let startIndex = 0;
  for (let i = 0; i < numOfPairs; i++) {
    let endIndex = startIndex + 2;
    if (!value[startIndex + 1]) pairs.push(`${value[startIndex]}_`);
    else pairs.push(value.slice(startIndex, endIndex));
    startIndex += 2;
  }

  return pairs;
}

console.log(splitString(""));
