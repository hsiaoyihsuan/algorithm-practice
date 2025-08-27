import {TreeNode} from "../test_tree.ts";

function insert(root: TreeNode | null, val: number): TreeNode {
  if (root === null) return new TreeNode(val);

  if (val > root.val) {
    root.right = insert(root.right, val);
  } else if (val < root.val) {
    root.left = insert(root.left, val);
  }

  return root;
}

const root = insert(null, 4);
insert(root, 2);
insert(root, 1);
insert(root, 3);
insert(root, 5);

console.log(root);
//         4
//       /   \
//      2     5
//     / \
//    1   3
