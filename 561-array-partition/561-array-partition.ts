function arrayPairSum(nums: number[]): number {
    let length: number = nums.length;
    let pairSum: number = 0;
    nums = nums.sort(function(a, b)  {
        if(a > b) return 1;
        if(a === b) return 0;
        if(a < b) return -1;
    });
    for(let i: number = 0; i<length; i = i + 2){
      pairSum += nums[i];
    }
    return pairSum;
};