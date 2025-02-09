import {insertionSort} from "./insertion-sort.ts";

// Time: best/average O(n+k), worst O(n2)
// Space: O(n+k)
export function bucketSort(nums: number[], bucketSize: number) {
  const min = Math.min(...nums);
  const max = Math.max(...nums);

  const bucketCount = Math.floor((max - min) / bucketSize) + 1;
  const buckets: number[][] = Array.from({length: bucketCount}, () => []);

  for (const num of nums) {
    const index = Math.floor((num - min) / bucketSize);
    buckets[index].push(num);
  }

  const result: number[] = [];
  for (const bucket of buckets) {
    insertionSort(bucket);
    result.push(...bucket);
  }

  return result;
}

const arr = [0.42, 0.32, 0.23, 0.51, 0.78, 0.53, 0.89, 0.12];
const bucketSize = 0.1;
console.log("Array before sorted:", arr);
console.log("Sorted array:", bucketSort(arr, bucketSize));
