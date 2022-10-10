function breakPalindrome(palindrome: string): string {
    let i: number = 0;
    let len: number = palindrome.length;
    let aryPalindrome = palindrome.split('');
    if(len <= 1) return '';
    for(let i: number = 0; i < (len-1)/2; i++){
        if(palindrome[i] !== 'a'){
            aryPalindrome[i] = 'a';
            return aryPalindrome.join('');
        }
    }
    aryPalindrome[len-1] = 'b';
    return aryPalindrome.join('');
};