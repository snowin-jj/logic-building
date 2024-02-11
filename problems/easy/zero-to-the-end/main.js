function moveZeros(arr = []) {
  let zerosArr = [];
  return arr
    .filter((item) => {
      if (item === 0) {
        zerosArr.push(0);
      } else {
        return item !== 0;
      }
    })
    .concat(zerosArr);
}

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));
