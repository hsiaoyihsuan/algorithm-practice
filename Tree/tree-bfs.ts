import {root, TreeNode} from "./test_tree.ts";

// Time: O(n), Space: O(n)
function bfs(root: TreeNode | null): void {
  if (!root) return;

  const queue: TreeNode[] = [root];

  while (queue.length > 0) {
    const node = queue.shift()!;
    console.log(node.val); // Process the node

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
}

bfs(root); // Output: 1, 2, 3, 4, 5

function bfsWithLayer(root: TreeNode | null): void {
  if (!root) return;

  const queue: TreeNode[] = [root];
  let level = 1;

  while (queue.length > 0) {
    const size = queue.length;
    console.log(`Level ${level}:`);

    for (let i = 0; i < size; i++) {
      const node = queue.shift()!;
      console.log(node.val); // Process the node

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    level++;
  }
}

bfsWithLayer(root); // Output: 1, 2, 3, 4, 5
