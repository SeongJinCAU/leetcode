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

function findTarget(root: TreeNode | null, k: number): boolean {
    const set: number[] = new Array();

    function traverseTree(root: TreeNode, k: number){
        if(!root) return false;
        if(set.includes(root.val)) return true;
        const subNum: number = k - root.val;
        set.push(subNum);
        return traverseTree(root.left, k) || traverseTree(root.right, k);
    }

    return traverseTree(root, k)
};