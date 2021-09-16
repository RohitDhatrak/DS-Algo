// 76. Minimum Window Substring

// Time Complexity  O(n)
// Space Complexity O(n)

public String minWindow(String s, String t) {
    String result = "";
    int minLen = Integer.MAX_VALUE;
    HashMap<Character, Integer> map = new HashMap<>();
    int counter = t.length();
    int begin = 0;
    int end = 0;

    for (int i = 0; i < t.length(); i++) {
        char character = t.charAt(i);
        if (map.containsKey(character)) {
            map.put(character, map.get(character) + 1);
        } else {
            map.put(character, 1);
        }
    }

    while (end <= s.length()) {
        if (counter == 0) {
            char beginChar = s.charAt(begin);
            if (end - begin < minLen) {
                minLen = end - begin;
                result = s.substring(begin, end);
            }
            if (map.containsKey(beginChar)) {
                map.put(beginChar, map.get(beginChar) + 1);
                if (map.get(beginChar) > 0) {
                    counter++;
                }
            }
            begin++;
        } else {
            if (end < s.length()) {
                char endChar = s.charAt(end);
                if (map.containsKey(endChar)) {
                    map.put(endChar, map.get(endChar) - 1);
                    if (map.get(endChar) >= 0) {
                        counter--;
                    }
                }
            }
            end++;
        }
    }

    return result;
}
