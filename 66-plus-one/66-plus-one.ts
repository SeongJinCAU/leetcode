function plusOne(digits: number[]): number[] {
    let index : number = digits.length-1;
    digits[index]++;
    while(index >= 0){
        if(digits[index] >= 10){
            digits[index] %= 10;
            if(index === 0){
                digits.unshift(1);
            }else{
                digits[index - 1]++;
                index--;
            }
        }else   break;
    }
    return digits;
};