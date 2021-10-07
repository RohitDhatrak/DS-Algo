// 844. Backspace String Compare

// Solution 1: Using Stack
// Time Complexity  O(n+m)
// Space Complexity O(n+m)

var backspaceCompare = function(s, t) {
    const string1 = [];
    const string2 = [];

    function createArrayOfString(string, array) {
        for (const char of string) {
            if (char === "#") {
                array.pop();
            } else {
                array.push(char);
            }
        }
    }

    createArrayOfString(s, string1);
    createArrayOfString(t, string2);

    if (string1.length !== string2.length) return false;
    for (let i = 0; i < string1.length; i++) {
        if (string1[i] !== string2[i]) return false;
    }
    return true;
};

// Solution 2: in 2 pointer folder
