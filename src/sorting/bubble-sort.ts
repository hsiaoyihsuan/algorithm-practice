// Bubble Sort
// Time: O(n2), Space: O(1)
// Sort the array in place
export function bubbleSort(arr: number[]): number[] {
  let isSorted = true;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length - i; j++) {
      if (arr[j] < arr[j - 1]) {
        isSorted = false;
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      }
    }

    if (isSorted) {
      return arr;
    }
  }
  return arr;
}

const arr = [3, 2, 4, 5, 8, 1];
console.log("Array before sorted:", arr);
console.log("Sorted array:", bubbleSort(arr));
