// 844. Backspace String Compare

// Solution 1: using 2 pointer
// Time Complexity  O(n)
// Space Complexity O(1)

var backspaceCompare = function (s, t) {
    let ptr1 = s.length - 1;
    let ptr2 = t.length - 1;
    let sBackSpaceCount = 0;
    let tBackSpaceCount = 0;

    while (ptr1 >= 0 || ptr2 >= 0) {
        if (sBackSpaceCount === 0 && tBackSpaceCount === 0) {
            if (s[ptr1] !== "#" && t[ptr2] !== "#") {
                if (s[ptr1] !== t[ptr2]) {
                    return false;
                } else {
                    ptr1--;
                    ptr2--;
                }
            } else {
                if (s[ptr1] === "#") {
                    sBackSpaceCount++;
                    ptr1--;
                }
                if (t[ptr2] === "#") {
                    tBackSpaceCount++;
                    ptr2--;
                }
            }
        } else {
            while (sBackSpaceCount !== 0) {
                if (s[ptr1] === "#") {
                    sBackSpaceCount++;
                    ptr1--;
                } else {
                    sBackSpaceCount--;
                    ptr1--;
                }
            }
            while (tBackSpaceCount !== 0) {
                if (t[ptr2] === "#") {
                    tBackSpaceCount++;
                    ptr2--;
                } else {
                    tBackSpaceCount--;
                    ptr2--;
                }
            }
        }
    }
    return true;
};

// Solution 2: in stack and queue folder
