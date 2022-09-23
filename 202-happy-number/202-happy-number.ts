function happy(n: number): number{
    let num: number = 0;
    while(n){
        num = num + ~~((n % 10)**2);
        n = ~~(n / 10);
    }
    return num;
}

function isHappy(n: number): boolean {
    let first: number = n;
    let second: number = n;
    while(true){
        first = happy(first);
        second = happy(happy(second))
        if(first === 1 || second === 1) return true;
        else if(first === second) return false;
    }
};