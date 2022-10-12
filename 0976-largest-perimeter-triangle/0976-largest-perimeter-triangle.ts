function largestPerimeter(nums: number[]): number {
    nums.sort((a: number, b: number): number => {
        return a - b;
    });

    for(let i: number = nums.length - 3; i >= 0; i--){
        let a: number = nums[i];
        let b: number = nums[i+1];
        let c: number = nums[i+2];
        if(c < a + b)   return a + b + c;
    }
    return 0;
};