/**
 * Q1: Given a list of DISTINCT numbers, return all possible subsets (the power set).
 *
 * Example:
 * Input: [1, 2, 3]
 * Output: [[], [1], [2], [3], [1,2], [1,3], [2,3], [1,2,3]]
 *
 * Time Complexity: O(n × 2^n)
 * - There are 2^n possible subsets.
 * - Each subset takes up to O(n) time to copy when pushing.
 *
 * Space Complexity: O(n)
 * - Recursive call stack depth up to n.
 */
function subsetsWithoutDuplicates(nums: number[]): number[][] {
  function helper(nums: number[], i: number, curSubset: number[]) {
    if (i >= nums.length) {
      subsets.push([...curSubset]);
      return;
    }

    // Include nums[i]
    curSubset.push(nums[i]);
    helper(nums, i + 1, curSubset);
    curSubset.pop();

    // Exclude nums[i]
    helper(nums, i + 1, curSubset);
  }

  const subsets: number[][] = [];
  const curSubset: number[] = [];
  helper(nums, 0, curSubset);
  return subsets;
}

console.log("Distinct:", subsetsWithoutDuplicates([1, 2, 3]));

/**
 * Q2: Given a list of numbers (possibly with duplicates), return all unique subsets.
 *
 * Example:
 * Input: [1, 2, 2, 3]
 * Output: [
 *   [], [1], [2], [3],
 *   [1,2], [1,3], [2,3],
 *   [1,2,2], [1,2,3], [2,2,3], [1,2,2,3]
 * ]
 *
 * Time Complexity: O(n × 2^n)
 * - Still 2^n subset combinations, but with duplicate-skipping logic.
 *
 * Space Complexity: O(n)
 * - For recursion depth and current subset storage.
 */
function subsetsWithDuplicates(nums: number[]): number[][] {
  function helper(nums: number[], i: number, curSubset: number[]) {
    if (i >= nums.length) {
      subsets.push([...curSubset]);
      return;
    }

    curSubset.push(nums[i]);
    helper(nums, i + 1, curSubset);
    curSubset.pop();

    // Skip duplicates before excluding nums[i]
    while (i + 1 < nums.length && nums[i + 1] === nums[i]) {
      i++;
    }

    helper(nums, i + 1, curSubset);
  }

  nums.sort((a, b) => a - b); // important: ensures duplicates are adjacent
  const subsets: number[][] = [];
  const curSubset: number[] = [];
  helper(nums, 0, curSubset);
  return subsets;
}

console.log("With duplicates:", subsetsWithDuplicates([1, 2, 2, 3]));
