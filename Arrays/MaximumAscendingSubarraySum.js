// 1800. Maximum Ascending Subarray Sum

// Time Complexity  O(n)
// Space Complexity O(1)

var maxAscendingSum = function(nums) {
    let maxSum = nums[0];
    let currentSum = nums[0];
    let ptr = 1;
    
    while (ptr < nums.length) {
        if (nums[ptr - 1] < nums[ptr]) {
            currentSum += nums[ptr];
            if (currentSum > maxSum) {
                maxSum = currentSum;
            }
        } else {
            currentSum = nums[ptr]
        }
        ptr++;
    }

    return maxSum;
};
