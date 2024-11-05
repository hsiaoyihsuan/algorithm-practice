const graph = new Map<string, string[]>([
  ["A", ["B", "C"]],
  ["B", ["A", "D", "E"]],
  ["C", ["A", "F"]],
  ["D", ["B"]],
  ["E", ["B", "F"]],
  ["F", ["C", "E"]],
]);

export function bfs(graph: Map<string, string[]>, start: string): void {
  const visited = new Set<string>(); // Track visited nodes
  const queue: string[] = [start]; // Queue for BFS initialize with start node
  visited.add(start);

  while (queue.length > 0) {
    const node = queue.shift(); // Dequeue the first node
    if (!node) continue;

    console.log(node); // Process the current node

    // Enqueue all unvisited neighbors
    for (const neighbor of graph.get(node) || []) {
      if (!visited.has(neighbor)) {
        queue.push(neighbor);
        visited.add(neighbor);
      }
    }
  }
}

bfs(graph, "A");
