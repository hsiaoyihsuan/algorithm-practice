import {root, TreeNode} from "./test_tree.ts";

function bfs(root: TreeNode | null): void {
  if (!root) return;

  const queue: TreeNode[] = [root];

  while (queue.length > 0) {
    const node = queue.shift();
    console.log(node!.val); // Process the node

    for (const neighbor of [node!.left, node!.right]) {
      if (neighbor) {
        queue.push(neighbor);
      }
    }
  }
}

bfs(root); // Output: 1, 2, 3, 4, 5
