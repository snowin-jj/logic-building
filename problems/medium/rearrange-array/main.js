function rearrangeArray(nums = []) {
  let result = [];

  // store even and odd int seperate
  let positiveNums = [];
  let negativeNums = [];
  for (const num of nums) {
    if (num >= 0) positiveNums.push(num);
    else negativeNums.push(num);
  }

  // pair them with the index. eg: [+(0),-(0),.....]
  for (let i = 0; i < nums.length / 2; i++) {
    result.push(positiveNums[i]);
    result.push(negativeNums[i]);
  }

  return result;
}

console.log(rearrangeArray([-1, 1]));
