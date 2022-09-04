class Solution {
    public int lengthOfLastWord(String s) {
        return s.strip().split(" ")[s.strip().split(" ").length-1].length();
    }
}