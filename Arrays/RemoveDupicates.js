// Leetcode - 26. Remove Duplicates from Sorted Array

// Time Complexity  O(n)
// Space Complexity O(1)

var removeDuplicates = function(nums) {
    if (!nums.length) return 0;
    let lastPos = 0;
    let length = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[lastPos]) {
            nums[++lastPos] = nums[i];
            length++
        }
    }
    return length;
};
