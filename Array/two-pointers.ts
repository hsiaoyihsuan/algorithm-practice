// Q: Check if an array is palindrome.
function isPalindrome(word: string) {
  let left = 0,
    right = word.length - 1;
  while (left < right) {
    if (word.charAt(left) != word.charAt(right)) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

// Q: Given a sorted input array, return the two indices of two elements which sums up to the target value. Assume there's exactly one solution.
function targetSum(nums: number[], target: number) {
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    if (nums[left] + nums[right] > target) {
      right--;
    } else if (nums[left] + nums[right] < target) {
      left++;
    } else {
      return [left, right];
    }
  }
  return null;
}
