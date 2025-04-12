import {root, TreeNode} from "./test_tree.ts";

function dfsInorderRecursion(root: TreeNode | null): void {
  if (!root) return;

  dfsInorderRecursion(root.left); // Visit the left subtree
  console.log(root.val); // Process the current node
  dfsInorderRecursion(root.right); // Visit the right subtree
}

dfsInorderRecursion(root); // Output: 4, 2, 5, 1, 3

function dfsInorderIteration(root: TreeNode | null): void {
  const stack: TreeNode[] = [];
  let current: TreeNode | null = root;

  while (current || stack.length) {
    // Reach the leftmost node of the current node
    while (current) {
      stack.push(current);
      current = current.left;
    }

    // Current must be null at this point
    current = stack.pop()!;
    console.log(current.val); // Process the current node

    // We have visited the node and its left subtree, now visit its right subtree
    current = current.right;
  }
}

dfsInorderIteration(root); // Output: 4, 2, 5, 1, 3
