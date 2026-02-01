/**
 * Q: Count all unique paths from the top-left to the bottom-right cell.
 *    Rules:
 *      - You may only walk on cells with value 0.
 *      - You may move up, down, left, or right.
 *      - You cannot revisit a cell (no cycles).
 *
 * ---------------------------------------------------------
 * Approach: DFS + Backtracking
 * ---------------------------------------------------------
 * - Treat the grid as a graph where each 0-cell is a node.
 * - Explore all possible paths recursively.
 * - Mark each cell as visited when entering it, and unmark it
 *   when backtracking to allow other paths to reuse it.
 * - When reaching the bottom-right cell, count it as a valid path.
 *
 * Time Complexity:
 *   Worst case: O(4^(m*n))  (every cell tries 4 directions)
 * Space Complexity:
 *   O(m*n) for the recursion stack + visited matrix
 */

export function countPathsDfs(
  grid: number[][],
  r: number,
  c: number,
  visited: boolean[][]
): number {
  const rows = grid.length;
  const cols = grid[0].length;

  // Out of bounds or blocked or already visited
  if (r < 0 || c < 0 || r >= rows || c >= cols) return 0;
  if (grid[r][c] === 1 || visited[r][c]) return 0;

  // Reached destination
  if (r === rows - 1 && c === cols - 1) return 1;

  // Explore neighbors
  visited[r][c] = true;

  let count = 0;
  count += countPathsDfs(grid, r + 1, c, visited); // down
  count += countPathsDfs(grid, r - 1, c, visited); // up
  count += countPathsDfs(grid, r, c + 1, visited); // right
  count += countPathsDfs(grid, r, c - 1, visited); // left

  visited[r][c] = false; // backtrack

  return count;
}

// Initialize visited matrix
const matrix = [
  [0, 0, 0, 0],
  [1, 1, 0, 0],
  [0, 0, 0, 1],
  [0, 1, 0, 0],
];

const visited = Array.from({length: matrix.length}, () =>
  new Array(matrix[0].length).fill(false)
);

const paths = countPathsDfs(matrix, 0, 0, visited);
console.log(paths);
