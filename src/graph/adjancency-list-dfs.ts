/**
 * Q: Count all distinct paths from a start node to an end node in a directed graph.
 *    The graph may contain cycles, so we use a `visited` set to avoid revisiting
 *    nodes currently on the recursion stack.
 *
 * Approach: DFS with Backtracking
 * ---------------------------------------------------------
 * - Use DFS to explore every possible route from `start` to `end`.
 * - Track visited nodes to prevent infinite loops caused by cycles.
 * - When we reach the `end` node, we return 1 to indicate one valid path.
 * - After exploring a node, remove it from `visited` to allow different paths
 *   to use it (as long as they enter from a different recursion branch).
 *
 * Time Complexity:  O(V ^ V)
 * Space Complexity: O(V) recursion stack + visited set.
 */

const graph = new Map<string, string[]>([
  ["A", ["B"]],
  ["B", ["C", "E"]],
  ["C", ["E"]],
  ["E", ["D"]],
  ["D", []],
]);

export function countPathsDfs(
  graph: Map<string, string[]>,
  start: string,
  end: string,
  visited: Set<string>
): number {
  // Cycle protection: cannot revisit a node on current path
  if (visited.has(start)) return 0;

  // Base case: reached target
  if (start === end) return 1;

  visited.add(start);

  let total = 0;
  for (const neighbor of graph.get(start) || []) {
    total += countPathsDfs(graph, neighbor, end, visited);
  }

  visited.delete(start); // backtrack
  return total;
}

console.log(countPathsDfs(graph, "A", "D", new Set()));
