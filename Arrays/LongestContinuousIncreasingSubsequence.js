// 674. Longest Continuous Increasing Subsequence

// Time Complexity  O(n)
// Space Complexity O(1)

var findLengthOfLCIS = function(nums) {
    if (!nums.length) return 0;
    let count = 1;
    let maxCount = 1;
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i + 1] > nums[i]) {
            count++;
            maxCount = count > maxCount ? count : maxCount;
        } else count = 1;
    }
    return maxCount;
};
