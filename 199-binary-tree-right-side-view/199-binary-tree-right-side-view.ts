function traverse(node:TreeNode|null, level:number,result:Array<number>){
    if(!node) return;
    result[level] = node.val;
    traverse(node.left, level+1, result);
    traverse(node.right, level+1, result);
}

function rightSideView(root: TreeNode | null): number[] {
    let result = [];
    traverse(root, 0, result);
    return result;
};