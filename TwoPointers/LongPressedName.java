// 925. Long Pressed Name

// Time Complexity  O(n+m)
// Space Complexity O(1)

public boolean isLongPressedName(String name, String typed) {
    if (typed.length() < name.length()) return false;
    int namePtr = 0;
    int typedPtr = 0;

    while (typedPtr < typed.length() || namePtr < name.length()) {
        if(typedPtr >= typed.length()) return false;
        if (namePtr < name.length() && name.charAt(namePtr) == typed.charAt(typedPtr)) {
            namePtr++;
            typedPtr++;
        } else if (namePtr != 0 && name.charAt(namePtr - 1) == typed.charAt(typedPtr)) {
            typedPtr++;
        } else {
            return false;
        }
    }
    return true;
}
