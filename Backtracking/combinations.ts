/**
 * Problem:
 * Given n numbers (1 ~ n), return all possible combinations of size k.
 * (Mathematically known as "n choose k" → C(n, k))
 *
 * Example:
 * n = 4, k = 2
 * Output: [[1,2], [1,3], [1,4], [2,3], [2,4], [3,4]]
 *
 * Concept:
 * Use backtracking to explore all possibilities by either:
 *  - Including the current number
 *  - Excluding the current number
 */

// -----------------------------------------------
// Basic Backtracking Version
// -----------------------------------------------
// Time Complexity: O(k × 2ⁿ)
//   - Each element can be either included or excluded → 2ⁿ possibilities
//   - Copying the current combination takes O(k)
// Space Complexity: O(k)
//   - Recursion depth at most k
function combinations(n: number, k: number): number[][] {
  function helper(
    i: number,
    curComb: number[],
    combs: number[][],
    n: number,
    k: number
  ) {
    if (curComb.length === k) {
      combs.push([...curComb]);
      return;
    }

    // If we’ve gone past n, stop exploring
    if (i > n) return;

    // Include current number i
    curComb.push(i);
    helper(i + 1, curComb, combs, n, k);
    curComb.pop();

    // Exclude current number i
    helper(i + 1, curComb, combs, n, k);
  }

  const combs: number[][] = [];
  helper(1, [], combs, n, k);
  return combs;
}

console.log("Combinations (recursive include/exclude):", combinations(4, 2));

// -----------------------------------------------
// Optimized Backtracking Version
// -----------------------------------------------
// Time Complexity: O(k × C(n, k))
//   - We only explore valid branches that lead to length-k combinations
//   - Total number of combinations = C(n, k)
//   - Each copy of curComb costs O(k)
// Space Complexity: O(k)
function combinations2(n: number, k: number): number[][] {
  function helper(
    i: number,
    curComb: number[],
    combs: number[][],
    n: number,
    k: number
  ) {
    if (curComb.length === k) {
      combs.push([...curComb]);
      return;
    }

    if (i > n) return;

    // Iterate from i to n to generate combinations in order
    for (let j = i; j <= n; j++) {
      curComb.push(j);
      helper(j + 1, curComb, combs, n, k);
      curComb.pop();
    }
    curComb.pop();
  }

  const combs: number[][] = [];
  helper(1, [], combs, n, k);
  return combs;
}

console.log("Combinations (optimized loop version):", combinations2(4, 2));
