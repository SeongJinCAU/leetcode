class myQueue {
    front : number;
    rear : number;
    ary : Array<number>;
    numberSign : number;
    constructor(){
        this.front = -1;
        this.rear = -1;
        this.ary = new Array<number>();
        this.numberSign = 0;
    }
    public isEmpty() : boolean {
        if(this.front == this.rear)
            return true;
        else
            return false;
    }
    public push(num : number){
        this.rear += 1;
        this.ary.push(num);
    }
    public pop() : number | null{
        if(this.isEmpty()){
            return null;
        }
        this.front += 1;
        var rtn : number = this.ary[this.front];
        return rtn;
    }
    public isInQueue() : boolean{
        if(this.front == -1 && this.rear == -1) return false;
        else return true;
    }
    public setNumberSign(sign : string){
        if(sign == '-') this.numberSign = -1;
        else if (sign == '+') this.numberSign = 1;
    }
    public getNumberSign() : number{
        return this.numberSign;
    }
}


function myAtoi(s: string): number {
    let num : number = 0;
    let queue = new myQueue();
    for (let i = 0; i < s.length; i++){
        if(s[i] == ' '){    //공백 문자 만났을 경우
            if(!queue.isInQueue() && queue.getNumberSign() == 0){
                continue;
            }else{
                break;
            }
        }else if(s[i] >= '0' && s[i] <= '9'){   //숫자 만났을 경우
            queue.push(Number(s[i]));
        }else if(s[i] == '+' || s[i] == '-'){  //부호 만났을 경우
            if(queue.getNumberSign() == 0 && !queue.isInQueue())
                queue.setNumberSign(s[i]);
            else{
                break;
            }
        }else{  //공백과 숫자가 아닌 다른 문자들 만났을 경우
            break;
        }
    }
    while(!queue.isEmpty()){
        num = num*10 + queue.pop();
    }
    if(!(queue.getNumberSign() == 0))
        num = num * queue.getNumberSign();

    if(num < -2147483648)   return -2147483648;
    else if(num > 2147483647) return 2147483647;
    return num;
};