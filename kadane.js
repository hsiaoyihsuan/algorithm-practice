// Kadane's Algorithm O(n)
function maxSubArray(nums) {
  let currentMax = nums[0];
  let globalMax = nums[0];
  for (let i = 1; i < nums.length; i++) {
    currentMax = Math.max(currentMax + nums[i], nums[i]);
    if (currentMax > globalMax) {
      globalMax = currentMax;
    }
  }
  return globalMax;
}
