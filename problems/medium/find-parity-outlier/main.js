function findOutlier(nums = []) {
  const arrayTypes = {
    even: [],
    odd: [],
  };
  for (const num of nums) {
    if (num % 2 === 0) arrayTypes["even"].push(num);
    else arrayTypes["odd"].push(num);
  }

  return arrayTypes.even.length > arrayTypes.odd.length
    ? arrayTypes.odd[0]
    : arrayTypes.even[0];
}

console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]));
