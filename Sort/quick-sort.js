function quickSort(arr, start = 0, end = arr.length - 1) {
  if (start >= end) return arr;

  const pivot = partition(arr, start, end);
  quickSort(arr, start, pivot - 1);
  quickSort(arr, pivot + 1, end);

  return arr;
}

function partition(arr, start, end) {
  const pivot = arr[end];
  let i = start;

  for (let j = start; j < end; j++) {
    if (arr[j] < pivot) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
    }
  }
  [arr[i], arr[end]] = [arr[end], arr[i]];
  return i;
}

console.log(quickSort([]));
console.log(quickSort([1]));
console.log(quickSort([2, 5, 1, 4, 3, 0, 8, 6, 7]));
