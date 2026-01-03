// 1. Naive Recursive Fibonacci
// This is the simple recursive formula: F(n) = F(n-1) + F(n-2)
// Easy to understand, but very inefficient for large n
// Time complexity: O(2^n)
// Space complexity: O(n) because of the call stack
export function fibonacciRecursive(n: number): number {
  if (n <= 1) return n;
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

// 2. Recursive Fibonacci with Memoization (Top-Down Dynamic Programming)
// Cache results of subproblems to avoid repeated work
// Time complexity: O(n)
// Space complexity: O(n) because of cache and call stack
export function fibonacciMemo(
  n: number,
  cache: Map<number, number> = new Map()
): number {
  if (n <= 1) return n;

  if (cache.has(n)) return cache.get(n)!;

  const result = fibonacciMemo(n - 1, cache) + fibonacciMemo(n - 2, cache);
  cache.set(n, result);
  return result;
}

// 3. Bottom-Up Fibonacci (Iterative Dynamic Programming)
// Build results from the smallest subproblems
// Use only two variables for space optimization
// Time complexity: O(n)
// Space complexity: O(1)
export function fibonacciDP(n: number): number {
  if (n <= 1) return n;

  const dp = [0, 1];
  let i = 2;
  while (i <= n) {
    const result = dp[0] + dp[1];
    dp[0] = dp[1];
    dp[1] = result;
    i++;
  }
  return dp[1];
}

// Example usage
console.log("Recursive:", fibonacciRecursive(10)); // 55
console.log("Memoization:", fibonacciMemo(10)); // 55
console.log("Bottom-Up DP:", fibonacciDP(10)); // 55
