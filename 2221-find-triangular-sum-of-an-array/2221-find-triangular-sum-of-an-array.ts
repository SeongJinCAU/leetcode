function triangularSum(nums: number[]): number {
    let sumAry : number[] = new Array(nums.length);
    if(nums.length === 1){
        return nums[0];
    }
    for(let i : number = 0; i < nums.length-1; i++){
        sumAry[i] = (nums[i] + nums[i+1]) % 10;
    }
    for(let i : number = 1; i < nums.length - 1; i++){
        for(let j : number = 0; j < nums.length - (1 + i) ; j++){
            sumAry[j] = (sumAry[j] + sumAry[j+1]) % 10;
        }
    }

    return sumAry[0];
};