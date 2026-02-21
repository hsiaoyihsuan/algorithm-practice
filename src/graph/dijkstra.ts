import {PriorityQueue} from "@datastructures-js/priority-queue";

/**
 * Dijkstra's Algorithm (Single Source Shortest Path)
 *
 * Goal:
 * Find the shortest distance from a source node to all other nodes
 * in a weighted graph with non-negative edge weights.
 *
 * Approach:
 * - Greedy + Min Heap (Priority Queue)
 * - Always expand the node with the smallest known distance
 *
 * Time Complexity: O((V + E) log V)
 * Space Complexity: O(V + E)
 */
export function dijkstra(
  nodeNum: number,
  edges: number[][],
  src: number,
): Map<number, number> {
  // Build adjacency list: node -> [neighbor, weight]
  const graph = new Map<number, number[][]>();
  for (let i = 0; i < nodeNum; i++) {
    graph.set(i, []);
  }

  // edges format: [from, to, weight]
  for (const [from, to, weight] of edges) {
    graph.get(from)!.push([to, weight]);
  }

  // Store finalized shortest distances
  const shortest = new Map<number, number>();

  // Min heap: [currentDistance, node]
  const minHeap = new PriorityQueue<number[]>((a, b) => a[0] - b[0]);
  minHeap.enqueue([0, src]);

  while (!minHeap.isEmpty()) {
    const [curDist, node] = minHeap.dequeue()!;

    // If already processed with shortest distance, skip
    if (shortest.has(node)) continue;

    // Finalize shortest distance for this node
    shortest.set(node, curDist);

    // Relax neighbors
    for (const [neighbor, weight] of graph.get(node) || []) {
      if (!shortest.has(neighbor)) {
        minHeap.enqueue([curDist + weight, neighbor]);
      }
    }
  }

  return shortest;
}

// edges: [from, to, weight]
const edges = [
  [0, 1, 10],
  [0, 2, 6],
  [0, 3, 5],
  [1, 2, 2],
  [2, 3, 1],
];

console.log(dijkstra(4, edges, 0));
