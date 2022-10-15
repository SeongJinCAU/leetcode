/**
 Do not return anything, modify nums1 in-place instead.
 */
 function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    for(let i: number = 0; i < n; i++){
        nums1.splice(m + i, 0, nums2[i]);
        nums1.pop()
    }
    nums1.sort((a: number, b: number): number => {
        return a - b;
    });
    return;
};