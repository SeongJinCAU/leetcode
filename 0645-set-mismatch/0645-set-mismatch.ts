function findErrorNums(nums: number[]): number[] {
    let setNums = new Set(nums);
    let setSum: number = 0;
    let arySum: number = 0;
    let len: number = nums.length;
    let total: number = len * (len + 1) / 2;
    setNums.forEach((v1) => setSum += v1);
    nums.forEach((v1) => arySum += v1);
    return [arySum - setSum, total - setSum];
};