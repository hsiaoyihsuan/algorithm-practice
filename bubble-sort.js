let arr = [3, 2, 4, 5, 8, 1];
function bubbleSort(arr) {
  // i => push how many bubbles to the front
  for (let i = 0; i < arr.length; i++) {
    // j => loop array to push bubbles
    for (let j = 1; j < arr.length; j++) {
      if (arr[j - 1] > arr[j]) {
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
      }
    }
  }
  return arr;
}
console.log(bubbleSort(arr));

// ------ Refined Bubble Sort
let arr2 = [3, 2, 4, 5, 8, 1];
function bubbleSort2(arr) {
  let isSorted = true; // Assume array is already sorted
  for (let i = 0; i < arr.length; i++) {
    // reduce push bubble times by minus i
    for (let j = 1; j < arr.length - i; j++) {
      if (arr[j - 1] > arr[j]) {
        isSorted = false; // When we know that arr is not sorted
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
      }
    }
    // If arr is sorted, arr will be return when i = 0
    if (isSorted) {
      return arr;
    }
  }
  return arr;
}
console.log(bubbleSort2(arr2));
