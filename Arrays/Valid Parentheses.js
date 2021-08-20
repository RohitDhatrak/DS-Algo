// 20. Valid Parentheses

// Time Complexity  O(n)
// Space Complexity O(n)

var isValid = function (s) {
    if (s.length % 2 !== 0) {
        return false;
    }

    const map = {
        "{": "}",
        "[": "]",
        "(": ")",
    };
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            stack.push(s[i]);
        } else {
            const lastElement = stack[stack.length - 1];
            if (s[i] === map[lastElement]) {
                stack.pop();
            } else {
                return false;
            }
        }
    }

    return stack.length === 0;
};
