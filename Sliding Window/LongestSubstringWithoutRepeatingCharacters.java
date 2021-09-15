

public int lengthOfLongestSubstring(String s) {
    if (s.length() == 0) return 0;
    int end = 0;
    int begin = 0;
    int maxLength = 0;
    HashSet<Character> map = new HashSet<>();

    while (end < s.length()) {
        char character = s.charAt(end);
        if (map.contains(character)) {
            while (map.contains(character)) {
                char beginChar = s.charAt(begin);
                map.remove(beginChar);
                begin++;
            }
        } else {
            map.add(character);
            int len = end - begin + 1;
            if (len > maxLength) {
                maxLength = len;
            }
            end++;
        }
    }

    return maxLength;
}
