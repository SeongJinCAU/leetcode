function search(nums: number[], target: number): number {
    let left: number = 0;
    let right: number = nums.length - 1;
    while(left < right){
        let mid: number = Math.floor((left + right) / 2);
        if(nums[mid] === target) return mid;

        if(nums[left] <= nums[mid]){
            if (target >= nums[left] && target < nums[mid]) {
                right = mid;
            }
            else {
                left = mid + 1;
            }
        }
        else {
            // Number is in the right side
            if (target > nums[mid] && target <= nums[right]) {
                left = mid + 1;
            }
            // Number is in the left side
            else {
                right = mid;
            }
        }
    }
    return nums[left] == target ? left : -1;
};