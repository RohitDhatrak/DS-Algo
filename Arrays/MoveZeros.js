// 283. Move Zeroes

// Time Complexity  O(n)
// Space Complexity O(1)

var moveZeroes = function(nums) {
   let slowPtr = 0;
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            nums[slowPtr++] = nums[i];
        } else count++;
    }
    for (let i = nums.length - 1; count > 0; i--, count--) {
        nums[i] = 0;
    } 
};
