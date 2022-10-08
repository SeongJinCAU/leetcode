function threeSumClosest(nums: number[], target: number): number {
    nums.sort((a, b) => a - b);
    const length: number  = nums.length;
    let closest = nums[0] + nums[1] + nums[length - 1];
    for (let i = 0; i < length - 2; i++) {
        let j = i + 1;
        let k = length - 1;
        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];
            if (sum <= target) {
                j++;
            } else {
                k--;
            }
            if (Math.abs(closest - target) > Math.abs(sum - target)) {
                closest = sum;
            }
        }
    }
    return closest;
};