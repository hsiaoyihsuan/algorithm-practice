function kadanes(nums: number[]): number {
  if (nums.length === 0) return 0;

  let maxSum = nums[0];
  let curMax = -Infinity;

  for (const num of nums) {
    curMax = Math.max(num, curMax + num);
    maxSum = Math.max(maxSum, curMax);
  }

  return maxSum;
}

console.log(kadanes([4, -1, 2, -7, 3, 4]));

function slidingWindow(nums: number[]): number[] | null {
  if (nums.length === 0) return null;

  let maxSum = -Infinity;
  let curSum = 0;
  let leftMax = 0;
  let rightMax = 0;
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    if (curSum < 0) {
      left = right;
      curSum = 0;
    }

    curSum += nums[right];
    if (curSum > maxSum) {
      maxSum = curSum;
      leftMax = left;
      rightMax = right;
    }
  }

  return [leftMax, rightMax];
}

console.log(slidingWindow([4, -1, 2, -7, 3, 4]));
console.log(slidingWindow([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
