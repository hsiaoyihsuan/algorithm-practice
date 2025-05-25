export function mergeSortRecursive(arr: number[]) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  return merge(mergeSortRecursive(left), mergeSortRecursive(right));
}

export function mergeSortInterative(arr: number[]) {
  if (arr.length <= 1) return arr;

  const n = arr.length;

  for (let size = 1; size < n; size *= 2) {
    for (let leftStart = 0; leftStart < n; leftStart += size * 2) {
      const mid = Math.min(leftStart + size, n);
      const rightEnd = Math.min(leftStart + size * 2, n);

      const left = arr.slice(leftStart, mid);
      const right = arr.slice(mid, rightEnd);

      const merged = merge(left, right);

      // Replace original array elements with merged result
      for (let i = 0; i < merged.length; i++) {
        arr[leftStart + i] = merged[i];
      }
    }
  }

  return arr;
}

function merge(left: number[], right: number[]): number[] {
  let leftIndex = 0;
  let rightIndex = 0;
  const result: number[] = [];

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
