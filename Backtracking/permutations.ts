/**
 * Q: Given a list of distinct integers, return all possible permutations.
 *
 * Example:
 *   Input: [1, 2, 3]
 *   Output:
 *     [
 *       [1, 2, 3], [1, 3, 2],
 *       [2, 1, 3], [2, 3, 1],
 *       [3, 1, 2], [3, 2, 1]
 *     ]
 *
 * ------------------------------
 * 🧩 Approach 1: Recursive (Bottom-Up)
 * ------------------------------
 * - Build permutations starting from the last element to the first.
 * - Each recursive step inserts the current number into every possible
 *   position of the smaller permutations generated from the rest.
 *
 * Example (nums = [1, 2, 3]):
 *   Step 1: helper(2) → [[]]
 *   Step 2: Insert 3 → [[3]]
 *   Step 3: Insert 2 → [[2,3], [3,2]]
 *   Step 4: Insert 1 → [[1,2,3], [2,1,3], [2,3,1], [1,3,2], [3,1,2], [3,2,1]]
 */

function permutationRecursive(nums: number[]): number[][] {
  function helper(i: number): number[][] {
    // Base case: return an empty permutation
    if (i >= nums.length) {
      return [[]];
    }

    const result: number[][] = [];
    const perms = helper(i + 1); // get all permutations of the remaining elements

    // Insert nums[i] into every possible position of each smaller permutation
    for (const perm of perms) {
      for (let j = 0; j <= perm.length; j++) {
        const newPerm = [...perm];
        newPerm.splice(j, 0, nums[i]);
        result.push(newPerm);
      }
    }

    return result;
  }

  return helper(0);
}

console.log("Recursive:", permutationRecursive([1, 2, 3]));

/**
 * ------------------------------
 * 🧩 Approach 2: Iterative (Bottom-Up)
 * ------------------------------
 * - Start with an initial list `[[]]`.
 * - For each number in nums:
 *     Insert it into every position of every existing permutation.
 * - Repeat until all numbers are processed.
 *
 * Example:
 *   Start: [[]]
 *   Add 1 → [[1]]
 *   Add 2 → [[2,1], [1,2]]
 *   Add 3 → [[3,2,1], [2,3,1], [2,1,3], [3,1,2], [1,3,2], [1,2,3]]
 */

function permutationIterative(nums: number[]): number[][] {
  let perms: number[][] = [[]]; // start with an empty permutation

  for (const num of nums) {
    const newPerms: number[][] = [];

    // For each existing permutation, insert `num` into all possible positions
    for (const perm of perms) {
      for (let i = 0; i <= perm.length; i++) {
        const newPerm = [...perm];
        newPerm.splice(i, 0, num);
        newPerms.push(newPerm);
      }
    }

    perms = newPerms;
  }

  return perms;
}

console.log("Iterative:", permutationIterative([1, 2, 3]));

/**
 * ------------------------------
 * Complexity Analysis
 * ------------------------------
 * Let n = nums.length
 *
 * - There are n! total permutations.
 * - For each permutation, inserting/copying elements takes O(n).
 *
 * ⏱ Time Complexity: O(n^2 × n!)
 * 💾 Space Complexity:
 *   - O(n!) for storing all permutations.
 *   - Recursive version adds O(n) call stack space.
 */
