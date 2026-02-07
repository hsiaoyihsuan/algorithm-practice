// Q: Given two strings s1 and s2, find the length of the longest common subsequence between the two strings.

// Method 1: Brute Force
// Time: O(2^(n+m)), Space: O(n + m)
export function lcs(s1: string, s2: string): number {
  function dfs(i1: number, i2: number): number {
    if (i1 === s1.length || i2 === s2.length) return 0;

    if (s1[i1] === s2[i2]) {
      return 1 + dfs(i1 + 1, i2 + 1);
    }

    return Math.max(dfs(i1 + 1, i2), dfs(i1, i2 + 1));
  }

  return dfs(0, 0);
}

// Method 2: Memoization
// Time: O(n * m), Space: O(n * m)
export function lcsMemo(s1: string, s2: string): number {
  const cache = Array.from({length: s1.length}, () =>
    new Array(s2.length).fill(-1),
  );

  function dfs(i1: number, i2: number): number {
    if (i1 === s1.length || i2 === s2.length) return 0;

    if (cache[i1][i2] !== -1) return cache[i1][i2];

    if (s1[i1] === s2[i2]) {
      cache[i1][i2] = 1 + dfs(i1 + 1, i2 + 1);
    } else {
      cache[i1][i2] = Math.max(dfs(i1 + 1, i2), dfs(i1, i2 + 1));
    }

    return cache[i1][i2];
  }

  return dfs(0, 0);
}

// Method 3: DP (Bottom-up)
// Time: O(n * m), Space: O(n * m)
export function lcsDp(s1: string, s2: string): number {
  const dp = Array.from({length: s1.length + 1}, () =>
    new Array(s2.length + 1).fill(0),
  );

  for (let i = 0; i < s1.length; i++) {
    for (let j = 0; j < s2.length; j++) {
      if (s1[i] === s2[j]) {
        dp[i + 1][j + 1] = 1 + dp[i][j];
      } else {
        dp[i + 1][j + 1] = Math.max(dp[i][j + 1], dp[i + 1][j]);
      }
    }
  }
  return dp[s1.length][s2.length];
}

// Memory optimization
export function lcsDpOptimized(s1: string, s2: string): number {
  let dp = new Array(s2.length + 1).fill(0);

  for (let i = 0; i < s1.length; i++) {
    const curRow = new Array(s2.length + 1).fill(0);
    for (let j = 0; j < s2.length; j++) {
      if (s1[i] === s2[j]) {
        curRow[j + 1] = 1 + dp[j];
      } else {
        curRow[j + 1] = Math.max(curRow[j], dp[j + 1]);
      }
    }
    dp = curRow;
  }
  return dp[s2.length];
}
