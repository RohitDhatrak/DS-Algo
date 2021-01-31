// 66. Plus One

// Time Complexity  O()
// Space Complexity O()

var plusOne = function (digits) {
    function addOne(digits, n) {
        if (n == 0 && digits[n] == 9) {
            digits[n] = 0;
            digits.unshift(1);
            return digits;
        }
        if (digits[n] == 9) {
            digits[n] = 0;
            return addOne(digits, n - 1);
        }
        digits[n] += 1;
        return digits;
    }
    return addOne(digits, digits.length - 1);
};
