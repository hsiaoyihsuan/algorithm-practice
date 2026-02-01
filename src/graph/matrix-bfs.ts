/**
 * Q: Find the length of the shortest path from the top-left to the bottom-right
 *    in a 2D grid. You may move up/down/left/right and only step on cells = 0.
 *
 * Approach: Breadth-First Search (BFS)
 * ---------------------------------------------------------
 * - BFS explores the grid level by level (layer by layer).
 * - The first time we reach the destination, it's guaranteed to be
 *   the shortest path.
 * - We track visited cells to avoid revisiting them.
 *
 * Time Complexity:  O(m * n)
 * Space Complexity: O(m * n)
 */

export function shortestPathBFS(grid: number[][]): number {
  const rows = grid.length;
  const cols = grid[0].length;
  // Create a proper visited matrix
  const visited = Array.from({length: rows}, () => Array(cols).fill(false));

  const queue: [number, number][] = [];
  queue.push([0, 0]);
  visited[0][0] = true;

  let layer = 0;
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  while (queue.length > 0) {
    const size = queue.length;

    // Process one BFS layer at a time
    for (let i = 0; i < size; i++) {
      const [r, c] = queue.shift()!;

      if (r === rows - 1 && c === cols - 1) {
        return layer;
      }

      for (const [dr, dc] of dirs) {
        const newR = r + dr;
        const newC = c + dc;

        if (
          newR < 0 ||
          newC < 0 ||
          newR >= rows ||
          newC >= cols ||
          visited[newR][newC] ||
          grid[newR][newC] === 1
        ) {
          continue;
        }

        queue.push([newR, newC]);
        visited[newR][newC] = true;
      }
    }

    layer++;
  }

  // No path exists
  return -1;
}

const grid = [
  [0, 0, 0, 0],
  [1, 1, 0, 0],
  [0, 0, 0, 1],
  [0, 1, 0, 0],
];

console.log(shortestPathBFS(grid));
