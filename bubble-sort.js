let arr = [8, 5, 7, 6];
function bubbleSort(arr) {
  let isSorted;
  for (let i = 0; i < arr.length; i++) {
    isSorted = true;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        isSorted = false;
      }
    }
    if (isSorted) {
      return arr;
    }
  }
  return arr;
}

console.log(bubbleSort(arr));
