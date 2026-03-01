/**
 * Bellman-Ford Algorithm (Single Source Shortest Path)
 *
 * Idea:
 * - Relax all edges repeatedly (V - 1 times)
 * - Can handle negative edge weights
 * - One extra pass detects negative cycles
 *
 * Time: O(V * E)
 * Space: O(V)
 *
 * edges format: [u, v, w] => directed edge u -> v with weight w
 */
function bellmanFord(
  nodeNum: number,
  edges: number[][],
  src: number,
): {dist: number[]; hasNegativeCycle: boolean} {
  const dist = new Array(nodeNum).fill(Infinity);
  dist[src] = 0;

  for (let i = 0; i < nodeNum - 1; i++) {
    let updated = false;

    // Relax edges V - 1 times
    for (const [u, v, w] of edges) {
      if (dist[u] !== Infinity && dist[u] + w < dist[v]) {
        dist[v] = dist[u] + w;
        updated = true;
      }
    }

    // Optimization: if no update in a full round, we can stop early
    if (!updated) break;
  }

  // Detect negative cycle (reachable from src)
  for (const [u, v, w] of edges) {
    if (dist[u] !== Infinity && dist[u] + w < dist[v]) {
      return {dist, hasNegativeCycle: true};
    }
  }

  return {dist, hasNegativeCycle: false};
}

const edges = [
  [0, 1, 4],
  [0, 2, 5],
  [1, 2, -2],
  [2, 3, 3],
  [1, 3, 6],
];

const result = bellmanFord(4, edges, 0);
console.log(result);
// dist should be: [0, 4, 2, 5], hasNegativeCycle: false

const edges2 = [
  [0, 1, 1],
  [1, 2, -1],
  [2, 1, -1], // cycle between 1 and 2 with total weight -2
];

const result2 = bellmanFord(3, edges2, 0);
console.log(result2);
// hasNegativeCycle should be true
