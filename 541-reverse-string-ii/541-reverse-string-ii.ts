function reverseStr(s: string, k: number): string {
    let rtnString: string = "";
    for (let i = 0; i < s.length; i += k) {
        if ((i / k) % 2 == 0) rtnString += [...s.substring(i, k+i)].reverse().join("");
        else rtnString += s.substring(i, k+i);
    }
    return rtnString;
};