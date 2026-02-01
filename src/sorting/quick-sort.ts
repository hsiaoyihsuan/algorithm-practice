// Quick Sort
// Time: O(n log n) ~ O(n ^ 2), Space: O(1)
// Unstable sorting algorithm
export function quickSort(arr: number[], s: number, e: number) {
  if (s >= e) return;

  let pivot = arr[e];
  let left = s;
  for (let i = s; i < e; i++) {
    if (arr[i] < pivot) {
      [arr[left], arr[i]] = [arr[i], arr[left]];
      left++;
    }
  }
  arr[e] = arr[left];
  arr[left] = pivot;

  quickSort(arr, s, left - 1);
  quickSort(arr, left + 1, e);
}

const arr1 = [3, 2, 4, 5, 8, 1];
console.log("Array before sorted:", arr1);
quickSort(arr1, 0, arr1.length - 1);
console.log("Sorted array:", arr1);
