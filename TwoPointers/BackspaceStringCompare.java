// 844. Backspace String Compare

// Solution 1: using 2 pointer
// Time Complexity  O(n)
// Space Complexity O(1)

public static boolean backspaceCompare(String s, String t) {
    int ptr1 = s.length() - 1;
    int ptr2 = t.length() - 1;
    int sBackSpaceCount = 0;
    int tBackSpaceCount = 0;

    while (ptr1 >= 0 || ptr2 >= 0) {
        if (sBackSpaceCount == 0 && tBackSpaceCount == 0) {
            if (ptr1 >= 0 && ptr2 >= 0 && s.charAt(ptr1) != '#' && t.charAt(ptr2) != '#') {
                if (s.charAt(ptr1) != t.charAt(ptr2)) {
                    return false;
                } else {
                    ptr1--;
                    ptr2--;
                }
            } else {
                boolean flag = false;
                if (ptr1 >= 0 && s.charAt(ptr1) == '#') {
                    sBackSpaceCount++;
                    ptr1--;
                    flag = true;
                }
                if (ptr2 >= 0 && t.charAt(ptr2) == '#') {
                    tBackSpaceCount++;
                    ptr2--;
                    flag = true;
                }
                if (!flag) {
                    return false;
                }
            }
        } else {
            while (sBackSpaceCount != 0) {
                if (ptr1 >= 0) {
                    if (s.charAt(ptr1) == '#') {
                        sBackSpaceCount++;
                        ptr1--;
                    } else {
                        sBackSpaceCount--;
                        ptr1--;
                    }
                } else {
                    sBackSpaceCount = 0;
                }
            }
            while (tBackSpaceCount != 0) {
                if (ptr2 >= 0) {
                    if (t.charAt(ptr2) == '#') {
                        tBackSpaceCount++;
                        ptr2--;
                    } else {
                        tBackSpaceCount--;
                        ptr2--;
                    }
                } else {
                    tBackSpaceCount = 0;
                }
            }
        }
    }
    return true;
}

// Solution 2: in stack and queue folder
