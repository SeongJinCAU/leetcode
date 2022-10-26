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

 function checkTree(root: TreeNode | null): boolean {

    function traverse(root: TreeNode| null): boolean{
        if(!root || (root.left === null && root.right === null)) return true;
        if(root.val !== root.left?.val + root.right?.val) return false;
        return traverse(root.left) || traverse(root.right);
    }

    return traverse(root);
};
