// 3. Longest Substring Without Repeating Characters

// Time Complexity  O(n)
// Space Complexity O(n)

var lengthOfLongestSubstring = function (s) {
    if (!s.length) return 0;
    let end = 0;
    let begin = 0;
    let maxLength = 0;
    const map = new Map();

    while (end < s.length) {
        let char = s[end];
        if (map.has(char)) {
            while (map.has(char)) {
                const beginChar = s[begin];
                map.delete(beginChar);
                begin++;
            }
        } else {
            map.set(char, 1);
            const len = end - begin + 1;
            if (len > maxLength) {
                maxLength = len;
            }
            end++;
        }
    }

    return maxLength;
};
