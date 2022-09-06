function climbStairs(n: number): number {
    let stairs : number[] = new Array(n);
        stairs[0] = 1;
        stairs[1] = 2;
        for(let i :number = 2; i < n ; i++){
            stairs[i] = stairs[i-2] + stairs[i-1];
        }
        return stairs[n-1];
};