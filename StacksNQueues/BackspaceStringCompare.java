// 844. Backspace String Compare

// Solution 1: Using Stack
// Time Complexity  O(n+m)
// Space Complexity O(n+m)

public static boolean backspaceCompare(String s, String t) {
    Stack<Character> string1 = new Stack<>();
    Stack<Character> string2 = new Stack<>();

    createArrayOfString(s, string1);
    createArrayOfString(t, string2);

    if (string1.size() != string2.size())return false;
    if(string1.isEmpty() && string2.isEmpty())return true;
    for (int i = 0; i < string1.size(); i++) {
        if (string1.elementAt(i) != string2.elementAt(i)) return false;
    }
    return true;
};

public static void createArrayOfString(String string, Stack<Character> stack) {
    for (int i = 0; i < string.length(); i++) {
        if (string.charAt(i) == '#') {
            if(!stack.isEmpty())
                stack.pop();
        } else{
            stack.push(string.charAt(i));
        }
    }
}

// Solution 2: in 2 pointer folder
