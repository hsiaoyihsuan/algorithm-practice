export class TreeNode {
  left: TreeNode | null;
  right: TreeNode | null;
  val: number;

  constructor(val: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.left = left ?? null;
    this.right = right ?? null;
    this.val = val;
  }
}

// Creating the test tree:
//         4
//       /   \
//      2     5
//     / \
//    1   3
export const root = new TreeNode(4);
root.left = new TreeNode(2, new TreeNode(1), new TreeNode(3));
root.right = new TreeNode(5);
