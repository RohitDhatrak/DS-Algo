// 13. Roman to Integer

var romanToInt = function (s) {
    const roman = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    let total = 0;
    for (let i = 0; i < s.length; i++) {
        let value = roman[s[i]];
        if (roman[s[i]] < roman[s[i + 1]]) {
            value = roman[s[i + 1]] - roman[s[i]];
            i++;
        }
        total += value;
    }
    return total;
};
