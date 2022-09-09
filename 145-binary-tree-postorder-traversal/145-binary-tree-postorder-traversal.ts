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

function postorderTraversal(root: TreeNode | null): number[] {
    let ary : number[] = new Array();
    postOrder(root, ary);
    return ary;
};

function postOrder(root:TreeNode | null, ary : number[]){
    if(!root){
        return;
    }
    postOrder(root.left, ary);
    postOrder(root.right, ary);
    ary.push(root.val);
    
}