/**
 * Q1: Find the length of the longest subarray where all elements are the same.
 *
 * Example:
 *   Input: [1, 1, 2, 2, 2, 3, 3]
 *   Output: 3   // the longest subarray is [2, 2, 2]
 *
 * ---------------------------------------------------------
 * Approach: Sliding Window (Variable Size)
 * ---------------------------------------------------------
 * - Move the `right` pointer to expand the window.
 * - If the current element differs from the element at `left`,
 *   reset `left` to `right` (start a new window).
 * - Track the maximum window size along the way.
 *
 * Time Complexity:  O(n)
 * Space Complexity: O(1)
 */
function longestUniformSubarray(nums: number[]): number {
  let maxLength = 0;
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] !== nums[left]) {
      left = right; // reset window start when value changes
    }

    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

console.log(longestUniformSubarray([1, 1, 2, 2, 2, 3, 3])); // 3

/**
 * Q2: Find the length of the shortest subarray whose sum ≥ target.
 *     (All elements are positive integers.)
 *
 * Example:
 *   Input: nums = [2,3,1,2,4,3], target = 7
 *   Output: 2   // subarray [4,3] has sum = 7
 *
 * ---------------------------------------------------------
 * Approach: Sliding Window (Shrink When Possible)
 * ---------------------------------------------------------
 * - Expand the window by moving `right` and accumulating the sum.
 * - Once the sum ≥ target, shrink the window from the left
 *   to find a smaller valid subarray.
 * - Keep track of the smallest valid window seen so far.
 *
 * Time Complexity:  O(n)
 * Space Complexity: O(1)
 */
function shortestSubarray(nums: number[], target: number): number {
  let minLength = Infinity;
  let sum = 0;
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];

    while (sum >= target) {
      minLength = Math.min(minLength, right - left + 1);
      sum -= nums[left];
      left++; // shrink window
    }
  }

  return minLength === Infinity ? 0 : minLength;
}

console.log(shortestSubarray([2, 3, 1, 2, 4, 3], 7)); // 2
