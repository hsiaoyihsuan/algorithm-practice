export function bfsAllShortestPaths(
  graph: Map<string, string[]>,
  start: string,
  target: string
) {
  const visited = new Set<string>();
  const queue: string[] = [start];
  const parentMap = new Map<string, string[]>();

  visited.add(start);
  parentMap.set(start, []);

  while (queue.length > 0) {
    const node = queue.shift()!;

    if (node === target) {
      return reconstructPaths(target);
    }

    for (const neighbor of graph.get(node) || []) {
      if (!visited.has(neighbor)) {
        queue.push(neighbor);
        visited.add(neighbor);
        parentMap.set(neighbor, [node]); // Initialize with the current node as the only parent
      } else if (queue.includes(neighbor)) {
        // If neighbor is still in the queue, it means it is at the same BFS level
        parentMap.get(neighbor)!.push(node);
      }
    }
  }

  function reconstructPaths(node: string): string[][] {
    if (node === start) return [[start]];

    const paths: string[][] = [];
    for (const parent of parentMap.get(node) || []) {
      const parentPaths = reconstructPaths(parent);
      for (const path of parentPaths) {
        paths.push([...path, node]);
      }
    }
    return paths;
  }

  return null;
}

const graph = new Map<string, string[]>([
  ["A", ["B", "C", "E"]],
  ["B", ["A", "D"]],
  ["C", ["A", "D"]],
  ["D", ["B", "C"]],
  ["E", ["A", "F"]],
  ["F", ["E"]],
]);

const paths = bfsAllShortestPaths(graph, "A", "D");
console.log("All shortest paths:", paths);
