/**
 * Q: Count the number of unique paths from the top-left
 *    to the bottom-right of a grid.
 *    You can only move right or down.
 */

/* -----------------------------------------------------------
   1. Pure Recursion
   - Try both directions at each cell
   - Recomputes many overlapping subproblems

   Time:  O(2^(rows + cols))
   Space: O(rows + cols)
*/
function countPathsRecursive(
  r: number,
  c: number,
  rows: number,
  cols: number
): number {
  if (r >= rows || c >= cols) return 0;
  if (r === rows - 1 && c === cols - 1) return 1;

  return (
    countPathsRecursive(r + 1, c, rows, cols) +
    countPathsRecursive(r, c + 1, rows, cols)
  );
}

/* -----------------------------------------------------------
   2. Memoization (Top-Down DP)
   - Cache results for each cell
   - Each state is computed once

   Time:  O(rows * cols)
   Space: O(rows * cols)
*/
function countPathsMemo(
  r: number,
  c: number,
  rows: number,
  cols: number,
  cache: number[][]
): number {
  if (r >= rows || c >= cols) return 0;
  if (cache[r][c] !== undefined) return cache[r][c];
  if (r === rows - 1 && c === cols - 1) return 1;

  cache[r][c] =
    countPathsMemo(r + 1, c, rows, cols, cache) +
    countPathsMemo(r, c + 1, rows, cols, cache);

  return cache[r][c];
}

/* -----------------------------------------------------------
   3. Bottom-Up DP (Space Optimized)
   - Build solution from bottom-right
   - Only keep previous row

   Time:  O(rows * cols)
   Space: O(cols)
*/
function countPathsDP(rows: number, cols: number): number {
  let prevRow = new Array(cols).fill(0);
  for (let i = rows - 1; i >= 0; i--) {
    let curRow = new Array(cols).fill(0);
    for (let j = cols - 2; j >= 0; j--) {
      curRow[j] = curRow[j + 1] + prevRow[j];
    }
    prevRow = curRow;
  }
  return prevRow[0];
}
