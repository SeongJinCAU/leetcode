function tribonacci(n: number): number {
   let tribonacci: number[] = new Array(n+1);
   tribonacci[0] = 0;
   tribonacci[1] = 1;
   tribonacci[2] = 1;
   if(n===0) return 0;
   else if(n ===1 || n===2) return 1;
   for(let i = 3; i < n+1; i++){
        tribonacci[i] = tribonacci[i-1] + tribonacci[i-2] + tribonacci[i-3];
   }
   return tribonacci[tribonacci.length-1];
};