// Selection Sort
// Time: O(n2), Space: O(1)
// Sort the array in place
export function selectionSort(arr: number[]): number[] {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
}

const arr = [3, 2, 4, 5, 8, 1];
console.log("Array before sorted:", arr);
console.log("Sorted array:", selectionSort(arr));
