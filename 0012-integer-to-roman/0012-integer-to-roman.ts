function intToRoman(num: number): string {
    let digit: string[] = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    let ten: string[] = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    let hundred: string[] = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    let thousand: string[] = ["", "M", "MM", "MMM"];

    return thousand[~~(num / 1000)] +hundred[~~(num%1000 / 100)] + ten[~~(num % 100 / 10)] + digit[~~(num % 10)];
};