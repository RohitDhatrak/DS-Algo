// 66. Plus One

// Time Complexity  O(n)
// Space Complexity O(1) / O(n)

var plusOne = function (digits) {
    let power = digits.length - 1;
    while (power >= 0) {
        if (digits[power] === 9) {
            if (power === 0) {
                digits[power] = 0;
                digits.unshift(1);
            } else {
                digits[power] = 0;
            }
            power--;
        } else {
            digits[power]++;
            return digits;
        }
    }

    return digits;
};
