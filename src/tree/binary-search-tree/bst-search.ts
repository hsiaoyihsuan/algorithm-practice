import {root, TreeNode} from "./test-bst.ts";

function search(root: TreeNode | null, target: number): boolean {
  if (root === null) return false;

  if (target > root.val) {
    return search(root.right, target);
  } else if (target < root.val) {
    return search(root.left, target);
  } else {
    return true;
  }
}

console.log(search(root, 1));
console.log(search(root, 2));
console.log(search(root, 3));
console.log(search(root, 4));
console.log(search(root, 5));
console.log(search(root, 0));
