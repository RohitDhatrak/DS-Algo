// 20. Valid Parentheses

// Time Complexity  O(n)
// Space Complexity O(n)

class Solution {
    public boolean isValid(String s) {
        if (s.length() % 2 != 0) {
            return false;
        }
        
        HashMap<String, String> map = new HashMap<>();
        Stack<String> stack = new Stack<>();
        map.put("{", "}");
        map.put("(", ")");
        map.put("[", "]");

        for (int i = 0; i < s.length(); i++) {
            String currentParentheses =  String.valueOf(s.charAt(i));
            if (map.get(currentParentheses) != null) {
                stack.push(currentParentheses);
            } else {
                if (stack.empty()) {
                    return false;
                }
                String lastElement = stack.peek();
                if (currentParentheses.equals(map.get(lastElement))) {
                    stack.pop();
                } else {
                    return false;
                }
            }
        }

        return stack.empty();
    }
}
