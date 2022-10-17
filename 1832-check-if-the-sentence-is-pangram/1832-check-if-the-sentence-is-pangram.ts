function checkIfPangram(sentence: string): boolean {
    let bucket: string[] = new Array();
    for(let i of sentence){
        if(bucket.indexOf(i) === -1) bucket.push(i);
    }
    if(bucket.length === 26)    return true;
    return false;
};