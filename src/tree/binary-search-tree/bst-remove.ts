import {root, TreeNode} from "./test-bst.ts";

function remove(root: TreeNode | null, target: number): TreeNode | null {
  if (root === null) return null;

  if (target > root.val) {
    root.right = remove(root.right, target);
  } else if (target < root.val) {
    root.left = remove(root.left, target);
  } else {
    if (root.left === null) {
      return root.right;
    } else if (root.right === null) {
      return root.left;
    } else {
      const minNode = minValueNode(root.right);
      root.val = minNode!.val;
      root.right = remove(root.right, minNode!.val);
    }
  }
  return root;
}

function minValueNode(root: TreeNode | null): TreeNode | null {
  let cur = root;
  while (root !== null && root.left !== null) {
    cur = root.left;
  }
  return cur;
}

//         4
//       /   \
//      2     5
//     / \
//    1   3
remove(root, 4);
console.log(root);
//         5
//       /
//      2
//     / \
//    1   3
