function getRow(rowIndex: number): number[] {
    let pascalTriangle : number[][] = new Array();
    let newRow : number[] = new Array();
    for(let i = 1; i<= rowIndex + 1; i++){
        newRow = new Array(i);
        if(i === 1) newRow[0] = 1;
        else{
            newRow[0] = 1;
            newRow[newRow.length-1] = 1;
        }
        for(let j = 1; j < newRow.length - 1; j++){
            newRow[j] = pascalTriangle[i-2][j-1] + pascalTriangle[i-2][j]
        }
        pascalTriangle.push(newRow);
    }
    return newRow;
};