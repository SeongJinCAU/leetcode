function addDigits(num: number): number {
    let sumDigit: number = 0;
    while(true){
        sumDigit += num%10;
        num = ~~(num/10)
        if(num === 0){
            if(sumDigit < 10) break;
            else{
                num = sumDigit;
                sumDigit = 0;
            }
        }
    }
    

    return sumDigit;
};

console.log(addDigits(38));