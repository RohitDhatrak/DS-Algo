// Find the missing number from the range 0 to n

// Time Complexity  O(n)
// Space Complexity O(1)

var missingNumber = function(nums) {
    const expectedSum = (nums.length * (nums.length + 1)) / 2;
    const sum = nums.reduce((accum, num) => accum + num, 0);
    return expectedSum - sum;
};
