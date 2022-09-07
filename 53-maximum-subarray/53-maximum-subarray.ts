function maxSubArray(nums: number[]): number {
    let sumAry : number[] = new Array(nums.length);
    let temp : number;
    sumAry[0] = nums[0];
    for(let i : number = 1; i < nums.length; i++){
        if(nums[i] < 0){
            if(sumAry[i-1] <0) sumAry[i] = sumAry[i-1] > nums[i] ? sumAry[i-1] : nums[i];
            else sumAry[i] = sumAry[i-1] + nums[i];
        }else{
            if(sumAry[i-1] <0) sumAry[i] = nums[i];
            else sumAry[i] = sumAry[i-1] + nums[i];
        }
    }

    return Math.max.apply(null, sumAry);
};