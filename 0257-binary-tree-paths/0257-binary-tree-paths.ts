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

 function binaryTreePaths(root: TreeNode | null): string[] {
    let res: string[] = [];

    function traverse(root: TreeNode| null, str: string){
        if(!root){
            res.push(str.slice(0, str.length-2));
            return;
        }
        str += String(root.val) + "->";
        if(root.left && !root.right){
            traverse(root.left, str);
        }else if(!root.left && root.right){
            traverse(root.right, str);
        }else if(root.left && root.right){
            traverse(root.left, str);
            traverse(root.right, str);
        }else{
            res.push(str.slice(0, str.length-2));
            return;
        }
    }

    traverse(root, String(""));
    return res;
};