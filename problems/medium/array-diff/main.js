function arrayDiff(arr1 = [], arr2 = []) {
  if (arr1.length <= 0) return [];
  else if (arr2.length <= 0) return arr1;

  return [...arr1, ...arr2].filter(
    (item) => item !== arr2.find((i) => i === item)
  );
}

console.log(arrayDiff([-17, 0, 14], [-17, 0]));
