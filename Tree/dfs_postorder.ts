import {root, TreeNode} from "./test_tree.ts";

function dfsPostorder(root: TreeNode | null): void {
  if (!root) return;

  dfsPostorder(root.left); // Visit the left subtree
  dfsPostorder(root.right); // Visit the right subtree
  console.log(root.val); // Process the current node
}

dfsPostorder(root); // Output: 4, 5, 2, 3, 1
