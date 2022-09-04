class Solution {
    public int lengthOfLastWord(String s) {
        String[] strArr = s.strip().split(" ");
        return strArr[strArr.length-1].length();
    }
}