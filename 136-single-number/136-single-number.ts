function singleNumber(nums: number[]): number {
    let len : number = nums.length;
    if(len === 1){
        return nums[0];
    }
    for(let i : number = 1; i < len; i++){
        nums[i] = nums[i-1]^nums[i];
    }
    return nums[len - 1];
};