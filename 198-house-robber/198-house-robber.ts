function rob(nums: number[]): number {
    let len: number = nums.length;
    let totalAmount: number[] = new Array(len);
    let tempAmount: number;
    totalAmount[0] = nums[0];
    totalAmount[1] = nums[1] > nums[0] ? nums[1] : nums[0];
    for(let i: number = 2; i < len; i++){
        tempAmount = totalAmount[i-2] + nums[i];
        totalAmount[i] = tempAmount > totalAmount[i-1] ? tempAmount : totalAmount[i-1];
    }
    return totalAmount[len-1];
};