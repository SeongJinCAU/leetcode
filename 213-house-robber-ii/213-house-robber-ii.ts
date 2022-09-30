function rob(nums: number[]): number {
    let len: number = nums.length;
    let DP1: number[] = new Array(len);
    let DP2: number[] = new Array(len);
    let tempAmount: number = 0;
    if(len === 1){
        return nums[0];
    }
    DP1[0] = nums[0];
    DP1[1] = nums[0];

    DP2[0] = 0;
    DP2[1] = nums[1];
    for(let i: number = 2; i < len; i++){
        if(i !== len-1){
            tempAmount = DP1[i-2] + nums[i];
            DP1[i] = tempAmount > DP1[i-1] ? tempAmount : DP1[i-1];
        }
        tempAmount = DP2[i-2] + nums[i];
        DP2[i] = tempAmount > DP2[i-1] ? tempAmount : DP2[i-1];
    }
    return DP1[len-2] > DP2[len-1] ? DP1[len-2] : DP2[len-1];
};