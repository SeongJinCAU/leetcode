function arrayPairSum(nums: number[]): number {
    let sumLen: number = nums.length/2;
    let pairSum: number = 0;
    let min: number = 0;
    let max: number = 0;
    for(let i: number = 0; i < sumLen; i++){
        if(i % 2 === 0){
            min = Math.min.apply(null, nums);
            pairSum += min;
            nums.splice(nums.indexOf(min), 1);
            min = Math.min.apply(null, nums);
            nums.splice(nums.indexOf(min), 1);  
        }else{
            max = Math.max.apply(null, nums);
            nums.splice(nums.indexOf(max), 1);  
            max = Math.max.apply(null, nums);
            pairSum += max;
            nums.splice(nums.indexOf(max), 1);  
        }   
    }
    return pairSum;
};