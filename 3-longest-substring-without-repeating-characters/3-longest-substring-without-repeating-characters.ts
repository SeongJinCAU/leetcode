function lengthOfLongestSubstring(s: string): number {
    let max: number = 1;
    let j:number = 0;
    let substring: Array<String> = [""];
    if (s.length == 0) return 0;
    for(let i:number = 0; i < s.length; i++){
        if(substring[j].length == 0){
            substring[j] += s[i];
        }
        for(let k:number = i+1; k < s.length; k++){
          if(substring[j].includes(s[k])){
            break;
          }
          substring[j] += s[k];
        }
        if(substring[j].length > max){
            max = substring[j].length;
        }
        substring.push("")
        j+=1;
    }
    
    return max;
};