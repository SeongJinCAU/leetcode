class Solution {
    public int climbStairs(int n) {
        Integer[] stairs = new Integer[n];
        if(n == 1)  return 1;
        else if (n == 2) return 2;
        stairs[0] = 1;
        stairs[1] = 2;
        for(int i = 2; i < n ; i++){
            stairs[i] = stairs[i-2] + stairs[i-1];
        }
        return stairs[n-1];
    }
}