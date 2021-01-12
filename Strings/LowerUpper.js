// convert a string to upper or lower case

// Time Complexity  O(n)
// Space Complexity O(1)

function toLower(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) >= "A" && str.charAt(i) <= "Z")
            result += String.fromCharCode(str.charCodeAt(i) + 32);
        else result += str.charAt(i);
    }
    return result;
}

function toUpper(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) >= "a" && str.charAt(i) <= "z")
            result += String.fromCharCode(str.charCodeAt(i) - 32);
        else result += str.charAt(i);
    }
    return result;
}
