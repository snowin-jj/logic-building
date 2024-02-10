function countSheep(sheepList) {
  let sheepCount = 0;
  for (let i = 0; i < sheepList.length; i++) {
    if (sheepList[i]) sheepCount += 1;
  }

  return sheepCount;
}

console.log(
  countSheep([
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    true,
  ])
);
