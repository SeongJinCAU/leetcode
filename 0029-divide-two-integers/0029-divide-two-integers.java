class Solution {
    public int divide(int dividend, int divisor) {
        if(dividend == Integer.MIN_VALUE && divisor == -1) return Integer.MAX_VALUE;
        if(divisor == 1) return dividend;
        if(divisor == -1) return -dividend;
        if(divisor == Integer.MIN_VALUE) return dividend==Integer.MIN_VALUE ? 1:0;
        boolean negFlag = (dividend > 0) ^ (divisor > 0);
        boolean outOfRange = false;
        if(dividend == Integer.MIN_VALUE){
            dividend += 1;
            outOfRange = true;
        }
        dividend = Math.abs(dividend);
        divisor = Math.abs(divisor);
        int quot = 0;
        while(dividend >= divisor){
            quot++;
            dividend -= divisor;
        }
        if(outOfRange && (dividend+1)==divisor){
            quot++;
        }

        return negFlag==false? quot:-quot;
    }
}