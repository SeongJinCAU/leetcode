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

function dfs(root : TreeNode | null) : number{
    if(!root) return 0;
    let maxHeight : number = Math.max(dfs(root.left) + 1, dfs(root.right) + 1);
    return maxHeight;
}

 function maxDepth(root: TreeNode | null): number {
    return dfs(root);
};