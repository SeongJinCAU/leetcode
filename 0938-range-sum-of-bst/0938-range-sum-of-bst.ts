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

 function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
    let rangeSum: number = 0;

    function traverse(root: TreeNode| null, low: number, high: number){
        if(!root) return;
        if(root.val >= low && root.val <= high){
            rangeSum += root.val;
        }
        traverse(root.left, low, high);
        traverse(root.right, low, high);
    }
    traverse(root, low, high);
    return rangeSum;
};