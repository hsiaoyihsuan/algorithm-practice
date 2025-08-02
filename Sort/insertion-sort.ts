// Inseriton Sort
// Time: O(n ^ 2), Space: O(1)
// Sort the array in place
// Stable sorting algorithm
// Best for array that is small or nearly sorted
export function insertionSort(arr: number[]): number[] {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    while (j >= 0 && arr[j] > arr[j + 1]) {
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      j--;
    }
  }
  return arr;
}

const arr = [3, 2, 4, 5, 8, 1];
console.log("Array before sorted:", arr);
console.log("Sorted array:", insertionSort(arr));
