export const directedGraphWithCycle = new Map<string, string[]>([
  ["A", ["B"]],
  ["B", ["C"]],
  ["C", ["D"]],
  ["D", ["E"]],
  ["E", ["B"]], // ← Cycle here (B → C → D → E → B)
]);

function hasCycleDirected(graph: Map<string, string[]>): boolean {
  const recStack = new Set<string>(); // recursion stack
  const visited = new Set<string>();

  function dfs(node: string): boolean {
    if (recStack.has(node)) return true; // cycle detected
    if (visited.has(node)) return false; // already processed

    recStack.add(node);
    visited.add(node);

    for (const neighbor of graph.get(node) || []) {
      if (dfs(neighbor)) return true;
    }

    recStack.delete(node); // backtrack
    return false;
  }

  for (const node of graph.keys()) {
    if (dfs(node)) return true;
  }

  return false;
}

const hasCycle = hasCycleDirected(directedGraphWithCycle);
console.log("Has Cycle? Ans:", hasCycle);
