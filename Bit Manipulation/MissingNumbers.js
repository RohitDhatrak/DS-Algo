// 268. Missing Number

var missingNumber = function(nums) {
    let ans;
    for(let i = 0; i < nums.length; i++){
        ans = ans ^ nums[i];
    }
    for(let i = 0; i <= nums.length; i++){
        ans = ans ^ i;
    }
    return ans
};

// arrays
var missingNumber = function(nums) {
    const expectedSum = (nums.length * (nums.length + 1)) / 2;
    const sum = nums.reduce((accum, num) => accum + num, 0);
    return expectedSum - sum
};
