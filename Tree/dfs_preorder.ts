import {root, TreeNode} from "./test_tree.ts";

function dfsPreorder(root: TreeNode | null): void {
  if (!root) return;

  console.log(root.val); // Process the current node
  dfsPreorder(root.left); // Visit the left subtree
  dfsPreorder(root.right); // Visit the right subtree
}

dfsPreorder(root); // Output: 1, 2, 4, 5, 3
