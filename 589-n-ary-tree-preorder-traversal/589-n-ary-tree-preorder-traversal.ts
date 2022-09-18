/**
 * Definition for node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */

function traversal(root: Node|null, ary:number[]){
    ary.push(root.val);
    for(let child of root.children) traversal(child,ary);
}
function preorder(root: Node | null): number[] {
    let preorderAry: number[] = new Array();
    if(!root) return [];
    traversal(root, preorderAry);

    return preorderAry;
};