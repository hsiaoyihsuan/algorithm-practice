import {root, TreeNode} from "./test_tree.ts";

// Recursive Version
function dfsPreorderRecursion(root: TreeNode | null): void {
  if (!root) return;

  console.log(root.val); // Process the current node
  dfsPreorderRecursion(root.left); // Visit the left subtree
  dfsPreorderRecursion(root.right); // Visit the right subtree
}

dfsPreorderRecursion(root); // Output: 1, 2, 4, 5, 3

// Iterative Version
function dfsPreorderIterative(root: TreeNode | null) {
  if (!root) return;

  const stack: TreeNode[] = [root];

  while (stack.length > 0) {
    const node = stack.pop()!;

    console.log(node.val);

    // Push right first so that left is processed first (LIFO)
    if (node?.right) stack.push(node.right);
    if (node?.left) stack.push(node.left);
  }
}

dfsPreorderIterative(root); // Output: 1, 2, 4, 5, 3
