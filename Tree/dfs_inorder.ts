import {root, TreeNode} from "./test_tree.ts";

function dfsInorder(root: TreeNode | null): void {
  if (!root) return;

  dfsInorder(root.left); // Visit the left subtree
  console.log(root.val); // Process the current node
  dfsInorder(root.right); // Visit the right subtree
}

dfsInorder(root); // Output: 4, 2, 5, 1, 3
