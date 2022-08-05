function divide(dividend: number, divisor: number): number {
    let max : number = (2**31)-1;
    let min : number = -(2**31);
    let rtnNum : number = parseInt(String(dividend / divisor));
    if(rtnNum < min) rtnNum = min;
    else if(rtnNum > max) rtnNum = max;
    return rtnNum;
};