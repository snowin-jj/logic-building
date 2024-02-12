function majorityElement(arr = []) {
  const itemsCount = {};

  for (let i = 0; i < arr.length; i++) {
    const currentItem = arr[i];
    if (itemsCount[currentItem] in arr) {
      itemsCount[currentItem] += 1;
    } else {
      itemsCount[currentItem] = 1;
    }
  }

  let majority = arr[0];
  for (let [key, value] of Object.entries(itemsCount)) {
    if (value > itemsCount[majority]) majority = key;
  }

  return majority;
}

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2, 1, 1]));
