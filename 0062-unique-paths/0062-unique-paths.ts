function uniquePaths(m: number, n: number): number {
    if(m === 1 && n === 1) return 1;
    let grid = Array.from(Array(m), () => new Array(n));
    for(let row: number = 1; row < m; row++){
        grid[row][0] = 1;
    }
    for(let col: number = 1; col < n; col++){
        grid[0][col] = 1;
    }
    for(let row: number = 1; row < m; row++){
        for(let col: number = 1; col < n; col++){
            grid[row][col] = grid[row-1][col] + grid[row][col-1];
        }
    }
    return grid[m-1][n-1];
};