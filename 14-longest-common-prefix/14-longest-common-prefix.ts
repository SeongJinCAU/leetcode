function longestCommonPrefix(strs: string[]): string {
    if(strs[0].length == 0) return '';

    for (let i = 0; i < strs[0].length; i++){
        for (let s of strs){
            if(s[i] !== strs[0][i]){
                return s.substring(0,i);
            }
        }
    }
    return strs[0];
};