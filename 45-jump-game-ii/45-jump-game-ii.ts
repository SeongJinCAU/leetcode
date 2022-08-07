function jump(nums: number[]): number {
    let maxJump : number[] = new Array(nums.length);
    maxJump.fill(9999);
    maxJump[0] = 0;
    for(let i : number = 0; i<nums.length; i++){
        for(let j : number = 1; j<= nums[i]; j++){
            maxJump[i+j] = Math.min(maxJump[i+j], maxJump[i] + 1)
        }
    }
    return maxJump[nums.length - 1];
};
