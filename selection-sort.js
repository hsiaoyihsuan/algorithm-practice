let arr = [3, 2, 4, 5, 8, 1];
function selectionSort(arr) {
  // Fint min n times
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    // Loop the rest of elements to find the min number
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    // After finding the min value, swap the min value with current i position
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
}
console.log(selectionSort(arr));
