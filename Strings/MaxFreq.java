// find the character occuring max times in the string

// Time Complexity  O(n)
// Space Complexity O(1)

// supporting function

function toLower(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) >= "A" && str.charAt(i) <= "Z")
            result += String.fromCharCode(str.charCodeAt(i) + 32);
        else result += str.charAt(i);
    }
    return result;
}

function maxFreq(str) {
    let count = [];
    for (let i = 0; i < 26; i++) count[i] = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) >= "a") count[str.charCodeAt(i) - 97]++;
        if (str.charAt(i) < "a") count[str.charCodeAt(i) - 65]++;
    }
    let max = 0;
    let ans = "";
    for (let i = 0; i < count.length; i++) {
        if (count[i] > max) {
            max = count[i];
            ans = String.fromCharCode(i + 97);
        }
    }
    return ans;
}
