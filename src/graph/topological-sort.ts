// Time: O(V + E), Space: O(V)
function topologicalSort(nodeNum: number, prerequisites: number[][]): number[] {
  // Build graph
  const graph = new Map<number, number[]>();
  for (let i = 0; i < nodeNum; i++) {
    graph.set(i, []);
  }
  for (const [src, dst] of prerequisites) {
    graph.get(src)!.push(dst);
  }

  const result: number[] = [];
  const visited = new Set<number>(); // fully processed nodes
  const visiting = new Set<number>(); // nodes in recursion stack

  function dfs(node: number): boolean {
    // Already processed
    if (visited.has(node)) return true;

    // Found a cycle
    if (visiting.has(node)) return false;

    // Mark as visiting (in current path)
    visiting.add(node);

    for (const neighbor of graph.get(node)!) {
      if (!dfs(neighbor)) return false; // cycle found
    }

    // Move from visiting → visited
    visiting.delete(node);
    visited.add(node);

    // Postorder append
    result.push(node);
    return true;
  }

  // Try DFS on every node
  for (let i = 0; i < nodeNum; i++) {
    if (!dfs(i)) return []; // return empty array if cycle exists
  }

  return result.reverse();
}
