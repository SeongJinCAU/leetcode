function singleNumber(nums: number[]): number {
    if(nums.length === 1){
        return nums[0];
    }
    for(let i : number = 1; i < nums.length; i++){
        nums[i] = nums[i-1]^nums[i];
    }
    return nums[nums.length - 1];
};