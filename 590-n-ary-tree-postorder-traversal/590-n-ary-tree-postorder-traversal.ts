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
function nAryPostOrder(root:Node|null, ary: number[]){
    for(let child of root.children){
        nAryPostOrder(child,ary);
    }
    ary.push(root.val);
}

function postorder(root: Node | null): number[] {
    let rtnAry: number[] = new Array();
    if(!root) return [];
    nAryPostOrder(root, rtnAry);

    return rtnAry;
};