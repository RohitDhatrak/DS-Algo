// 438. Find All Anagrams in a String

// Time Complexity  O(n)
// Space Complextiy O(n)

var findAnagrams = function(s, p) {
    const map = new Map();
    let counter = p.length;
    let begin = 0;
    let end = p.length;
    const ans = [];
    
    function addCharAndDecrementCounter(character) {
        map.set(character, map.get(character) - 1);
        if (map.get(character) >= 0) {
            counter--;
        }
    }

    function removeCharAndIncrementCounter(character) {
        map.set(character, map.get(character) + 1);
        if (map.get(character) > 0) {
            counter++;
        }
    }

    function checkIfCharIsPartOfP(character, isBeingAdded) {
        if (map.has(character)) {
            if (isBeingAdded) {
                addCharAndDecrementCounter(character);
            } else {
                removeCharAndIncrementCounter(character);
            }
        }
    }

    for (let char of p) {
        if (map.has(char)) {
            map.set(char, map.get(char) + 1);
        } else {
            map.set(char, 1);
        }
    }

    for (let i = 0; i < end; i++) {
        checkIfCharIsPartOfP(s[i], true);
    }

    while (begin < s.length) {
        if (counter === 0) {
            ans.push(begin);
        }

        const startChar = s[begin];
        const endChar = s[end];

        checkIfCharIsPartOfP(startChar, false);
        checkIfCharIsPartOfP(endChar, true);

        begin++;
        end++;
    }

    return ans;
};
