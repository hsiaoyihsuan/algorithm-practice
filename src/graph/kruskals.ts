import {PriorityQueue} from "@datastructures-js/priority-queue";
import {UnionFind} from "../tree/union-find";

/**
 * Kruskal's Algorithm (Minimum Spanning Tree)
 *
 * Idea:
 * - Always pick the smallest weight edge first (greedy)
 * - Use a min heap to process edges in ascending weight order
 * - Use Union-Find to check whether adding an edge creates a cycle
 * - Only add edges that connect two different components
 * - Stop when MST contains N - 1 edges
 *
 * Key Insight:
 * - If union(u, v) returns false, u and v are already connected,
 *   so adding this edge would form a cycle
 *
 * Time: O(E log E)  // pushing & popping all edges from heap
 * Space: O(E + V)   // heap + union-find + MST storage
 *
 * edges format: [u, v, w] => undirected edge u <-> v with weight w
 */
export function kruskal(edges: number[][], nodeNum: number): number[][] {
  const minheap = new PriorityQueue<number[]>((a, b) => a[0] - b[0]);

  for (const [u, v, w] of edges) {
    minheap.enqueue([w, u, v]);
  }

  const unionFind = new UnionFind(nodeNum);

  const mst: number[][] = [];

  while (mst.length < nodeNum - 1) {
    const [w, u, v] = minheap.dequeue()!;
    if (!unionFind.union(u, v)) {
      continue;
    }

    mst.push([u, v]);
  }

  return mst;
}
