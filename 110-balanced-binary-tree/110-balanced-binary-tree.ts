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

 function isBalanced(root: TreeNode | null): boolean {
    const dfs = (node : TreeNode | null): number => {
        if(!node) return 0;
        const left: number = dfs(node.left);
        const right: number = dfs(node.right);
        if(left === -1 || right === -1 || Math.abs(left-right) > 1) return -1;
        return Math.max(left, right) + 1;
    }
    return dfs(root) !== -1;
};