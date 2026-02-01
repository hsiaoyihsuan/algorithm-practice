// Example usage:
const graph = new Map<string, string[]>([
  ["A", ["B", "C"]],
  ["B", ["D", "E"]],
  ["C", ["F"]],
  ["D", []],
  ["E", ["F"]],
  ["F", []],
]);

function dfsRecursive(
  graph: Map<string, string[]>,
  start: string,
  visited: Set<string>
): void {
  if (visited.has(start)) return;

  console.log(start); // Process the currrent node
  visited.add(start); // Mark as visited

  for (const neighbor of graph.get(start) ?? []) {
    dfsRecursive(graph, neighbor, visited);
  }
}

console.log("DFS (Recursive):");
dfsRecursive(graph, "A", new Set<string>()); // Output: A, B, D, E, F, C

function dfsIterative(graph: Map<string, string[]>, start: string): void {
  const stack: string[] = [start];
  const visited = new Set<string>();

  while (stack.length > 0) {
    const node = stack.pop()!;

    if (visited.has(node)) continue;

    console.log(node); // Process the currrent node
    visited.add(node); // Mark as visited

    for (const neighbor of graph.get(node) ?? []) {
      if (!visited.has(neighbor)) {
        stack.push(neighbor);
      }
    }
  }
}

console.log("DFS (Iterative):");
dfsIterative(graph, "A"); // Output: A, C, F, B, E, D
