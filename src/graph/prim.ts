import {PriorityQueue} from "@datastructures-js/priority-queue";

/**
 * Prim's Algorithm (Minimum Spanning Tree)
 *
 * Idea:
 * - Start from a source node
 * - Always pick the smallest weight edge that connects
 *   the current tree to an unvisited node
 *
 * Time: O(E log V)
 * Space: O(V + E)
 *
 * edges format: [u, v, w] => undirected edge u <-> v with weight w
 */
export function prim(
  edges: number[][],
  nodeNum: number,
  src: number,
): number[][] {
  // Build adjacency list: node -> [neighbor, weight]
  const graph = new Map<number, number[][]>();
  for (let i = 0; i < nodeNum; i++) {
    graph.set(i, []);
  }

  // Since MST is for undirected graph, add both directions
  for (const [u, v, w] of edges) {
    graph.get(u)!.push([v, w]);
    graph.get(v)!.push([u, w]);
  }

  // Min heap storing: [weight, from, to]
  // Always expand the smallest edge first (greedy)
  const minHeap = new PriorityQueue<number[]>((a, b) => a[0] - b[0]);

  // Track nodes already included in MST
  const visited = new Set<number>();
  visited.add(src);

  // Initialize heap with edges from the source node
  for (const [to, w] of graph.get(src)!) {
    minHeap.enqueue([w, src, to]);
  }

  // Store MST edges: [from, to]
  const mst: number[][] = [];

  // Continue until heap is empty or MST has N - 1 edges
  while (!minHeap.isEmpty() && mst.length < nodeNum - 1) {
    const [weight, from, to] = minHeap.dequeue()!;

    // Skip if this node is already in the MST (avoid cycles)
    if (visited.has(to)) continue;

    // Accept this edge into MST
    mst.push([from, to]);
    visited.add(to); // IMPORTANT: mark as visited

    // Add all outgoing edges of the new node
    for (const [next, w] of graph.get(to)!) {
      if (!visited.has(next)) {
        minHeap.enqueue([w, to, next]);
      }
    }
  }

  return mst;
}

// Test Case: Undirected weighted graph
// 0 --1-- 1
// |      / \
// 4     2   3
// |    /     \
// 2 --5-------3
// edges format: [u, v, weight]
const edges = [
  [0, 1, 1],
  [0, 2, 4],
  [1, 2, 2],
  [1, 3, 3],
  [2, 3, 5],
];

const nodeNum = 4;
const src = 0;

const mst = prim(edges, nodeNum, src);

console.log("MST edges:", mst);
