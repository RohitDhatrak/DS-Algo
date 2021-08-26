// 283. Move Zeroes

// Time Complexity  O(n)
// Space Complexity O(1)

var moveZeroes = function(nums) {
    let zeroCount = 0;
    let slowPtr = 0;
    for (let elem of nums) {
        if (elem !== 0) {
            nums[slowPtr++] = elem;
        } else {
            zeroCount++;
        }
    }
    for (let i = nums.length - 1; zeroCount > 0; i--, zeroCount--) {
        nums[i] = 0;
    }
};
