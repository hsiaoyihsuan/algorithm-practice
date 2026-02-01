export const undirectedGraphWithCycle = new Map<string, string[]>([
  ["A", ["B", "C"]],
  ["B", ["A", "D"]],
  ["C", ["A", "D"]],
  ["D", ["B", "C"]],
]);

function hasCycleUndirected(graph: Map<string, string[]>): boolean {
  const visited = new Set<string>();

  function dfs(node: string, parent: string | null): boolean {
    visited.add(node);

    for (const neighbor of graph.get(node) || []) {
      if (!visited.has(neighbor)) {
        if (dfs(neighbor, node)) return true;
      } else if (neighbor !== parent) {
        return true; // cycle found
      }
    }

    return false;
  }

  for (const node of graph.keys()) {
    if (!visited.has(node)) {
      if (dfs(node, null)) return true;
    }
  }

  return false;
}

const hasCycle = hasCycleUndirected(undirectedGraphWithCycle);
console.log("Has Cycle? Ans:", hasCycle);
