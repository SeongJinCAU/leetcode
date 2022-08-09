function lengthOfLastWord(s: string): number {
    let stringArr : String[] = s.trim().split(" ");
    return stringArr[stringArr.length - 1].length;
};