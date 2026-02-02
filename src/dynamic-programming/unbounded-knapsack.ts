// Q: Given a list of N items, and a backpack with a limited capacity, return the maximum total profit that can be contained in the backpack. The i-th item's profit is profit[i] and its weight is weight[i]. Assume you can have an unlimited number of each item available.

// Mehod 1: Brute force Solution
// Time: O(2^capacity), Space: O(capacity)
export function knapsack(profit: number[], weight: number[], capacity: number) {
  function dfs(i: number, capacity: number): number {
    if (i >= profit.length || capacity === 0) return 0;

    // Option 1: skip current item
    let result = dfs(i + 1, capacity);

    // Option 2: take current item (only if it fits)
    if (capacity >= weight[i]) {
      const take = profit[i] + dfs(i, capacity - weight[i]);
      result = Math.max(result, take);
    }

    return result;
  }

  return dfs(0, capacity);
}

// Method 2: Memoization Solution
// Time: O(n * m), Space: O(n * m)
// Where n is the number of items & m is the capacity.
export function knapsackMemo(
  profit: number[],
  weight: number[],
  capacity: number,
) {
  // rows -> item index, cols -> remaining capacity
  const memo = Array.from({length: profit.length}, () =>
    new Array(capacity + 1).fill(-1),
  );

  function dfs(i: number, capacity: number): number {
    if (i >= profit.length || capacity === 0) return 0;

    if (memo[i][capacity] !== -1) return memo[i][capacity];

    // Option 1: skip current item
    let result = dfs(i + 1, capacity);

    // Option 2: take current item (only if it fits)
    if (capacity >= weight[i]) {
      const take = profit[i] + dfs(i, capacity - weight[i]);
      result = Math.max(result, take);
    }

    memo[i][capacity] = result;

    return result;
  }

  return dfs(0, capacity);
}

// Method 3: Dynamic Programming (Bottom-up)
// Time: O(n * m), Space: O(n * m)
// Where n is the number of items & m is the capacity.
export function knapsackDp(
  profit: number[],
  weight: number[],
  capacity: number,
) {
  const n = profit.length;
  const dp = Array.from({length: n}, () => new Array(capacity + 1).fill(0));

  // Fill the first column and row to reduce edge cases
  for (let i = 0; i <= capacity; i++) {
    if (i >= weight[0]) {
      dp[0][i] = profit[0];
    }
  }

  for (let r = 1; r < n; r++) {
    for (let c = 1; c <= capacity; c++) {
      // Option 1: skip current item
      dp[r][c] = dp[r - 1][c];
      if (c >= weight[r]) {
        // Option 2: take current item
        const take = profit[r] + dp[r][c - weight[r]];
        dp[r][c] = Math.max(dp[r][c], take);
      }
    }
  }

  return dp[n - 1][capacity];
}

// Memory optimization
export function knapsackDpOptimized(
  profit: number[],
  weight: number[],
  capacity: number,
) {
  let dp = new Array(capacity + 1).fill(0);

  for (let r = 0; r < profit.length; r++) {
    const curRow = new Array(capacity + 1).fill(0);
    for (let c = 1; c <= capacity; c++) {
      // Option 1: skip current item
      curRow[c] = dp[c];
      if (c >= weight[r]) {
        // Option 2: take current item
        const take = profit[r] + curRow[c - weight[r]];
        curRow[c] = Math.max(curRow[c], take);
      }
    }
    dp = curRow;
  }

  return dp[capacity];
}
