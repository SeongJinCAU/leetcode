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

function inorderTraverse(root:TreeNode|null, ary : number[]){
    if(root){
        inorderTraverse(root.left, ary);
        ary.push(root.val);
        inorderTraverse(root.right, ary);
    }
}


 function inorderTraversal(root: TreeNode | null): number[] {
    let rtnNode : number[] = new Array();
    inorderTraverse(root, rtnNode);
    return rtnNode;
};