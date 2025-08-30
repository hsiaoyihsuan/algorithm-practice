import {root, TreeNode} from "./test_tree.ts";

/**
 * Postorder Traversal (Left → Right → Root)
 * Recursive implementation
 */
function dfsPostorderRecursion(root: TreeNode | null): void {
  if (!root) return;

  dfsPostorderRecursion(root.left); // Visit the left subtree
  dfsPostorderRecursion(root.right); // Visit the right subtree
  console.log(root.val); // Process the current node
}

dfsPostorderRecursion(root); // Expected Output: 4, 5, 2, 3, 1
console.log("-".repeat(20));

/**
 * Postorder Traversal using Iteration + Visited Flag
 * - Use a stack and a parallel visited flag array
 * - First time seeing a node → push it back as "visited"
 * - Next time (when visited = true) → process it
 */
function dfsPostorderIteration(root: TreeNode | null): void {
  const stack: (TreeNode | null)[] = [root];
  const visited: boolean[] = [false];

  while (stack.length > 0) {
    const node = stack.pop()!;
    const isVisited = visited.pop()!;

    if (node) {
      if (isVisited) {
        console.log(node.val); // Process after children
      } else {
        // Re-push the node (mark as visited)
        stack.push(node);
        visited.push(true);

        // Push right and left children
        stack.push(node.right);
        visited.push(false);

        stack.push(node.left);
        visited.push(false);
      }
    }
  }
}

dfsPostorderIteration(root); // Expected Output: 4, 5, 2, 3, 1
console.log("-".repeat(20));

/**
 * Postorder Traversal (Reverse Method)
 * - Uses two stacks (or one stack + output array)
 * - Traverses Root → Right → Left, then reverses the order
 * - Simpler but less intuitive for learning postorder
 */
function dfsPostorderIteration2(root: TreeNode | null): void {
  if (!root) return;

  const stack: TreeNode[] = [root];
  const output: TreeNode[] = [];

  while (stack.length > 0) {
    const node = stack.pop()!;
    output.push(node);

    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }

  // Reverse output to achieve Left → Right → Root
  while (output.length > 0) {
    const node = output.pop()!;
    console.log(node.val);
  }
}

dfsPostorderIteration2(root); // Expected Output: 4, 5, 2, 3, 1
