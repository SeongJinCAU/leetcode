function countAndSay(n: number): string {
    let str: string = "1";

    for(let i: number = 1; i < n; i++){
        str = say(str);
    }

    return str;
};

function say(str: string): string{
    let result: string = ""
    let p1: number = 0, p2: number = 0;
    while(p2 < str.length){
        if(str.charAt(p1) != str.charAt(p2)){
            result += String(p2 - p1) + str.charAt(p1);
            p1 = p2;
        }
        p2++
    }
    result += String(p2 - p1) + str.charAt(p1);
    return result;
}