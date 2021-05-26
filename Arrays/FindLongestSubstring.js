// write a function that returns the length of longest substring with all distinct characters
// findLongestSubstring('') // 0
// findLongestSubstring('rithmschool') // 7
// findLongestSubstring('thisisawesome') // 6
// findLongestSubstring('thecatinthehat') // 7
// findLongestSubstring('bbbbbb') // 1
// findLongestSubstring('longestsubstring') // 8
// findLongestSubstring('thisishowwedoit') // 6

function findLongestSubstring(str) {
    let maxLen = 0;
    let start = 0;
    let end = 1;
    const map = new Map();
    map.set(str[0], 0);

    while (end < str.length) {
        if (map.has(str[end]) && map.get(str[end]) >= start) {
            start = map.get(str[end]) + 1;
            map.set(str[end], end);
        } else {
            map.set(str[end], end);
        }
        if (end - start + 1 > maxLen) {
            maxLen = end - start + 1;
        }
        end++;
    }

    return maxLen;
}
