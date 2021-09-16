// 438. Find All Anagrams in a String

// Time Complexity  O(n)
// Space Complextiy O(n)

class Solution {
    int counter;

    public void addCharAndDecrementCounter(char character, HashMap<Character, Integer> map) {
        map.put(character, map.get(character) - 1);
        if (map.get(character) >= 0) {
            counter--;
        }
    }

    public void removeCharAndIncrementCounter(char character, HashMap<Character, Integer> map) {
        map.put(character, map.get(character) + 1);
        if (map.get(character) > 0) {
            counter++;
        }
    }

    public void checkIfCharIsPartOfP(char character, boolean isBeingAdded, HashMap<Character, Integer> map) {
        if (map.containsKey(character)) {
            if (isBeingAdded) {
                addCharAndDecrementCounter(character, map);
            } else {
                removeCharAndIncrementCounter(character, map);
            }
        }
    }
    
    public List<Integer> findAnagrams(String s, String p) {
        ArrayList<Integer> ans = new ArrayList<>();
        if (p.length() > s.length()) {
            return ans;
        }
        counter = p.length();
        int begin = 0;
        int end = p.length();
        HashMap<Character, Integer> map = new HashMap<>();

        for (int i = 0; i < p.length(); i++) {
            char character = p.charAt(i);
            if (map.containsKey(character )) {
                map.put(character , map.get(character ) + 1);
            } else {
                map.put(character , 1);
            }
        }

        for (int i = 0; i < end; i++) {
            checkIfCharIsPartOfP(s.charAt(i), true, map);
        }

        while (end <= s.length()) {
            if (counter == 0) {
                ans.add(begin);
            }
            
            char startChar = s.charAt(begin);
            checkIfCharIsPartOfP(startChar, false, map);
            
            if (end < s.length()) {
                char endChar = s.charAt(end);
                checkIfCharIsPartOfP(endChar, true, map);
            }
            
            begin++;
            end++;
        }

        return ans;
    }
}
