function removeDuplicates(nums: number[]): number {
    let count : number = 0;
    let judge:boolean[] = new Array(201);
    for(let i = nums.length - 1; i >= 0; i--){
        if(judge[nums[i]+100]){
            nums.splice(i,1)
        }else{
            judge[nums[i]+100] = true;
            count++;
        }
    }
    return count;
};