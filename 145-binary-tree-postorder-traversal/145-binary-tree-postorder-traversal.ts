/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function postorderTraversal(root) {
    let ary = new Array();
    ary = postOrder(root, ary);
    return ary;
}
;
function postOrder(root, ary) {
    if (!root) {
        return ary;
    }
    postOrder(root.left, ary);
    postOrder(root.right, ary);
    ary.push(root.val);
    return ary;
}