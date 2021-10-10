// 1004. Max Consecutive Ones III

// Time Complexity  O(n)
// Space Complexity O(1)

// Solution 1: two pointer approach
var longestOnes = function(nums, k) {
    let flipsLeft = k;
    let maxCount = 0;
    let count = 0;
    let flipPoint = 0;
    let startPoint = 0;

    while (startPoint < nums.length) {
        const num = nums[startPoint];
        if (num === 1) {
            count++;
            startPoint++;
        } else if (flipsLeft > 0) {
            if (flipsLeft === k) flipPoint = startPoint;
            count++;
            startPoint++;
            flipsLeft--;
        } else {
            count = 0;
            flipsLeft = k;
            startPoint = flipPoint + 1;
            if (k === 0) flipPoint = startPoint;
        }
        maxCount = Math.max(maxCount, count);
    }

    return maxCount;  
};

// Solution 2: check sliding window folder
