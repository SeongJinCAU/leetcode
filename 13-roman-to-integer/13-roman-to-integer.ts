class Stack {
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

function romanInt(s:string):number | null {
    s = s.toUpperCase();
    switch(s){
        case 'I':
            return 1;
        case 'V':
            return 5;
        case 'X':
            return 10;
        case 'L':
            return 50;
        case 'C':
            return 100;
        case 'D':
            return 500;
        case 'M':
            return 1000;
        default:
            return null;
    }
}

function romanToInt(s: string): number {
    let num : number = 0;
    let temp : string;
    
    let stack = new Stack();
    for (var i = 0; i < s.length; i++){
        temp = stack.peek();
        if(temp == null){
            stack.push(s[i]);
            continue;
        }
        if(romanInt(stack.peek()) >= romanInt(s[i])){
            var biggest : number = 0;
            while(!stack.isEmpty()){
                if(biggest < romanInt(stack.peek())){
                    biggest = romanInt(stack.peek());
                }
                num -= romanInt(stack.pop());
            }
            num += 2*biggest;
            stack.push(s[i]);
        }else{
            stack.push(s[i])
        }
    }
    var biggest : number = 0;
    while(!stack.isEmpty()){
        if(biggest < romanInt(stack.peek())){
            biggest = romanInt(stack.peek());
        }
        num -= romanInt(stack.pop());
    }
    num += 2*biggest;
    return num;
};