function reverseWords(s: string): string {
    let words : string[] = s.split(' ');
    for(let i: number = 0; i < words.length; i++){
        words[i] = words[i].split("").reverse().join("");
    }
    return words.join(" ");
};