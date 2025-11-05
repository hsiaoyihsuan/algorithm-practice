/**
 * Q: Given an integer array `nums` and an integer `k`,
 *    return `true` if there are two equal elements within a sliding window of size `k`.
 *
 * Example:
 *   Input: nums = [1, 2, 3, 1], k = 3
 *   Output: true
 *   Explanation: nums[0] == nums[3] and |3 - 0| = 3 ≤ k
 *
 * --------------------------------------------------------
 * Approach: Sliding Window with Hash Set
 * --------------------------------------------------------
 * - Maintain a Set that represents the current window of at most size `k`.
 * - As you move the right pointer, check if the current number already exists in the set.
 *   → If yes, we've found a duplicate within distance `k`.
 * - If the window exceeds size `k`, remove the leftmost element (shrink the window).
 *
 * Time Complexity:  O(n)   — each element is added/removed at most once
 * Space Complexity: O(k)   — the set holds at most k elements
 */
function closeDuplicates(nums: number[], k: number): boolean {
  const window = new Set<number>();
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    // Ensure the window size doesn't exceed k
    if (right - left > k) {
      window.delete(nums[left]);
      left++;
    }

    // If the current element already exists in the window → duplicate found
    if (window.has(nums[right])) {
      return true;
    }

    // Add current element to the window
    window.add(nums[right]);
  }

  return false;
}

console.log(closeDuplicates([1, 2, 3, 1], 3)); // true
console.log(closeDuplicates([1, 0, 1, 1], 1)); // true
console.log(closeDuplicates([1, 2, 3, 1, 2, 3], 2)); // false
