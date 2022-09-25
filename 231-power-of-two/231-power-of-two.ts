function isPowerOfTwo(n: number): boolean {
    if(n <= 0) return false;
    let result: number = n & (n-1);

    return result === 0 ? true : false;
};