function BFS(grid: string[][], startRow: number, startCol: number){
    let queue = [[startRow, startCol]];
    let row: number = grid.length;
    let col: number = grid[0].length;

    while(queue.length){
        const [nowRow, nowCol] = queue.shift();

        [[-1,0],[1,0],[0,-1],[0,1]].forEach(([moveRow, moveCol]) => {
            const newRow = nowRow + moveRow, newCol = nowCol + moveCol;
            if(0<=newRow && newRow < row && 0<=newCol && newCol < col && grid[newRow][newCol] === '1'){
                grid[newRow][newCol] = '0';
                queue.push([newRow, newCol]);
            }
        })
    }

}
function numIslands(grid: string[][]): number {
    let numIsland : number = 0;
    let rowMax: number = grid.length;
    let colMax: number = grid[0].length;
    
    for(let row: number = 0; row < rowMax; row++){
        for(let col: number = 0; col < colMax; col++){
            if(grid[row][col] === "1"){
                grid[row][col] = '0'
                numIsland++;
                BFS(grid, row, col);
            }
        }
    }
    return numIsland;
};