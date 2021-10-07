// 925. Long Pressed Name

// Time Complexity  O(n)
// Space Complexity O(1)

var isLongPressedName = function (name, typed) {
    if (typed.length < name.length) return false;
    let namePtr = 0;
    let typedPtr = 0;

    while (typedPtr < typed.length || namePtr < name.length) {
        if (name[namePtr] === typed[typedPtr]) {
            namePtr++;
            typedPtr++;
        } else if (name[namePtr - 1] === typed[typedPtr]) {
            typedPtr++;
        } else {
            return false;
        }
    }
    return true;
};
