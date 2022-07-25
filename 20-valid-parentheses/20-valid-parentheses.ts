class myStack {
    top : number;
    ary : Array<string>;
    constructor(){
        this.top = -1;
        this.ary = new Array<string>();
    }
    public push(roman : string){
        this.top += 1;
        if(this.ary.length == this.top || (Array.isArray(this.ary) && this.ary.length == 0 )){
            this.ary.push(roman);
        }else{
            this.ary[this.top] = roman;
        }
    }
    public isEmpty(): boolean{
        if(this.top == -1)
            return true;
        else
            return false;
    }
    public pop() : string | null{
        if (this.isEmpty()){
            return null;
        }
        var rtn : string = this.ary[this.top];
        this.top -= 1;
        return rtn;
    }
    public peek():string|null{
        if(this.isEmpty()){
            return null;
        }
        return this.ary[this.top];
    }
}

function isValid(s: string): boolean {
    let isVal : boolean = true;
    let stack : myStack = new myStack;
    for(let i : number = 0; i<s.length; i++){
        if(s[i] === '(' || s[i] === '{' || s[i] === '['){
            stack.push(s[i])
        }else if(s[i] === ')' && stack.peek() === '('){
            stack.pop();
        }else if(s[i] === '}' && stack.peek() === '{'){
            stack.pop();
        }else if(s[i] === ']' && stack.peek() === '['){
            stack.pop();
        }else{
            isVal = false;
            break;
        }
    }
    if(!stack.isEmpty())
        isVal = false;
    return isVal;
};