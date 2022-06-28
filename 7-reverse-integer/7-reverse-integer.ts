function reverse(x: number): number {
    let reverseNum: number = 0;
    while(x != 0){
        reverseNum *= 10;
        reverseNum = reverseNum + x%10;
        x = Math.floor(~~(x / 10));
    }
    if (reverseNum < -2147483648||reverseNum > 2147483647)
        return 0;
    return reverseNum;
};