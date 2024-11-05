export function bfsShortestPath(
  graph: Map<string, string[]>,
  start: string,
  target: string
): string[] | null {
  const visited = new Set<string>();
  const queue: string[] = [start];
  const parentMap = new Map<string, string | null>(); // Map to record each node's parent for path reconstruction

  visited.add(start);
  parentMap.set(start, null); // Start node has no parent

  while (queue.length > 0) {
    const node = queue.shift()!;

    // Check if the target node is reached; reconstruct the path
    if (node === target) {
      return reconstructPath(node, parentMap);
    }

    for (const neighbor of graph.get(node) || []) {
      if (!visited.has(neighbor)) {
        queue.push(neighbor);
        visited.add(neighbor);
        parentMap.set(neighbor, node);
      }
    }
  }

  // Helper function to reconstruct the path from the start node to the target node
  function reconstructPath(
    node: string,
    parentMap: Map<string, string | null>
  ) {
    const path: string[] = [];
    let currentNode: string | null = node;

    while (currentNode !== null) {
      path.unshift(currentNode);
      currentNode = parentMap.get(currentNode) || null;
    }

    return path;
  }

  return null;
}

const graph = new Map<string, string[]>([
  ["A", ["B", "C"]],
  ["B", ["A", "D", "E"]],
  ["C", ["A", "F"]],
  ["D", ["B"]],
  ["E", ["B", "F"]],
  ["F", ["C", "E"]],
]);

const path = bfsShortestPath(graph, "A", "E");
console.log("Shortest path:", path); // Example output: Shortest path: [ 'A', 'B', 'E' ]
