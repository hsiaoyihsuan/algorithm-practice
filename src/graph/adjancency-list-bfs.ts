/**
 * Q: Find the shortest path length (in number of edges)
 *    between `start` and `end` in a directed graph.
 *
 * Approach: Breadth-First Search (BFS)
 * --------------------------------------------------------------
 * - BFS explores the graph level by level.
 * - The first time we reach `end`, we have found the shortest path.
 * - Use a queue for level-order traversal.
 * - Use a visited set to avoid revisiting nodes.
 *
 * Time Complexity:  O(V + E)
 * Space Complexity: O(V)
 */

const graph = new Map<string, string[]>([
  ["A", ["B"]],
  ["B", ["C", "E"]],
  ["C", ["E"]],
  ["E", ["D"]],
  ["D", []],
]);

export function shortestPathBFS(
  graph: Map<string, string[]>,
  start: string,
  end: string
): number {
  const queue: string[] = [start];
  const visited = new Set<string>([start]);

  let layer = 0; // number of edges traveled so far

  while (queue.length > 0) {
    const size = queue.length;

    // Process all nodes at the current BFS level
    for (let i = 0; i < size; i++) {
      const node = queue.shift()!;

      if (node === end) {
        return layer;
      }

      // IMPORTANT: Use graph.get(node), not graph.get(start)
      for (const neighbor of graph.get(node) || []) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }

    layer++; // move to next level
  }

  return -1; // no path found
}

console.log(shortestPathBFS(graph, "A", "D"));
