import {root, TreeNode} from "./test_tree.ts";

function dfsPostorderRecursion(root: TreeNode | null): void {
  if (!root) return;

  dfsPostorderRecursion(root.left); // Visit the left subtree
  dfsPostorderRecursion(root.right); // Visit the right subtree
  console.log(root.val); // Process the current node
}

dfsPostorderRecursion(root); // Output: 4, 5, 2, 3, 1

function dfsPostorderIteration(root: TreeNode | null): void {
  if (!root) return;

  const stack: TreeNode[] = [root];
  const output: TreeNode[] = [];

  while (stack.length > 0) {
    const node = stack.pop()!;
    output.push(node);

    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }

  while (output.length > 0) {
    const node = output.pop()!;
    console.log(node.val); // Process the current node
  }
}

dfsPostorderIteration(root); // Output: 4, 5, 2, 3, 1
