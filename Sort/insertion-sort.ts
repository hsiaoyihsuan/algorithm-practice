// Inseriton Sort
// Time: best O(n) worst O(n2), Space: O(1)
// Sort the array in place
// Best for array that is small or nearly sorted
export function insertionSort(arr: number[]): number[] {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
}

const arr = [3, 2, 4, 5, 8, 1];
console.log("Array before sorted:", arr);
console.log("Sorted array:", insertionSort(arr));
