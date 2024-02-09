function hashtagGenerator(value = "") {
  if (value === "") return false;

  let result = "";
  let nextHeadIdx = 0;

  for (let i = 0; i < value.length; i++) {
    const element = value[i];
    if (element === " ") {
      nextHeadIdx = i + 1;
    } else {
      if (i === nextHeadIdx) {
        result += element.toUpperCase();
      } else {
        result += element;
      }
    }
  }

  if (result.length >= 140 || result === "") return false;
  return `#${result}`;
}

console.log(hashtagGenerator("Do We have A Hashtag"));
