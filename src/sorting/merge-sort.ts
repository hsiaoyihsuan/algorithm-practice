// Merge sort
// Time: O(n log n), Space: O(n)
// Stable sorting algorithm

export function mergeSortRecursive(arr: number[], l: number, r: number): void {
  if (l >= r) return;

  const mid = Math.floor((l + r) / 2);

  mergeSortRecursive(arr, l, mid);
  mergeSortRecursive(arr, mid + 1, r);
  merge(arr, l, mid, r);

  function merge(arr: number[], l: number, m: number, r: number): void {
    const leftLength = m - l + 1;
    const rightLength = r - m;

    const leftArr = new Array(leftLength);
    const rightArr = new Array(rightLength);

    for (let i = 0; i < leftLength; i++) {
      leftArr[i] = arr[l + i];
    }

    for (let i = 0; i < rightLength; i++) {
      rightArr[i] = arr[m + 1 + i];
    }

    let i = 0;
    let j = 0;
    let k = l;
    while (i < leftLength && j < rightLength) {
      if (leftArr[i] <= rightArr[j]) {
        arr[k] = leftArr[i];
        i++;
      } else {
        arr[k] = rightArr[j];
        j++;
      }
      k++;
    }

    while (i < leftLength) {
      arr[k] = leftArr[i];
      i++;
      k++;
    }
    while (j < rightLength) {
      arr[k] = rightArr[j];
      j++;
      k++;
    }
  }
}

export function mergeSortInterative(arr: number[]): void {
  const n = arr.length;

  for (let size = 1; size < n; size *= 2) {
    for (let left = 0; left < n - size; left += 2 * size) {
      const mid = left + size - 1;
      const right = Math.min(left + 2 * size - 1, n - 1);
      merge(arr, left, mid, right);
    }
  }

  function merge(arr: number[], l: number, m: number, r: number): void {
    const leftLength = m - l + 1;
    const rightLength = r - m;

    const leftArr = new Array(leftLength);
    const rightArr = new Array(rightLength);

    for (let i = 0; i < leftLength; i++) {
      leftArr[i] = arr[l + i];
    }

    for (let i = 0; i < rightLength; i++) {
      rightArr[i] = arr[m + 1 + i];
    }

    let i = 0;
    let j = 0;
    let k = l;
    while (i < leftLength && j < rightLength) {
      if (leftArr[i] <= rightArr[j]) {
        arr[k] = leftArr[i];
        i++;
      } else {
        arr[k] = rightArr[j];
        j++;
      }
      k++;
    }

    while (i < leftLength) {
      arr[k] = leftArr[i];
      i++;
      k++;
    }
    while (j < rightLength) {
      arr[k] = rightArr[j];
      j++;
      k++;
    }
  }
}

const arr1 = [3, 2, 4, 5, 8, 1];
console.log("Array before sorted:", arr1);
mergeSortRecursive(arr1, 0, arr1.length - 1);
console.log("Sorted array:", arr1);

const arr2 = [3, 2, 4, 5, 8, 1];
console.log("Array before sorted:", arr2);
mergeSortInterative(arr2);
console.log("Sorted array:", arr2);
