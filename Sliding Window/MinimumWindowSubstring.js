// 76. Minimum Window Substring

// Time Complexity  O(n)
// Space Complexity O(n)

var minWindow = function(s, t) {
    let result = "";
    let minLen = Number.MAX_SAFE_INTEGER;
    const map = new Map();
    let counter = t.length;
    let begin = 0;
    let end = 0;

    for (const character of t) {
        if (map.has(character)) {
            map.set(character, map.get(character) + 1);
        } else {
            map.set(character, 1);
        }
    }

    while (end <= s.length) {
        if (counter === 0) {
            const beginChar = s[begin];
            if (end - begin < minLen) {
                minLen = end - begin;
                result = s.substring(begin, end);
            }
            if (map.has(beginChar)) {
                map.set(beginChar, map.get(beginChar) + 1);
                if (map.get(beginChar) > 0) {
                    counter++;
                }
            }
            begin++;
        } else {
            const endChar = s[end];
            if (map.has(endChar)) {
                map.set(endChar, map.get(endChar) - 1);
                if (map.get(endChar) >= 0) {
                    counter--;
                }
            }
            end++;
        }
    }

    return result;
};
