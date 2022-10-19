function topKFrequent(words: string[], k: number): string[] {
    let hash = new Map<string, number>();
    for(let i of words){
        if(hash.has(i)){
            hash.set(i, hash.get(i) + 1);
        }else{
            hash.set(i, 1);
        }
    }
    
    let hashToAry = Array.from(hash);
    hashToAry.sort();
    hashToAry.sort((a, b) => b[1] - a[1]);
    let i: number = 1;
    let rtnString: string[] = new Array();
    for(const [key, _] of hashToAry){
        rtnString.push(key);
        i++;
        if(i > k) break;
    }
    return rtnString;
};