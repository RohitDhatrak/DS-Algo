// 1004. Max Consecutive Ones III

// Time Complexity  O(n)
// Space Complexity O(1)

var longestOnes = function (nums, k) {
    let startPoint = 0;
    let endPoint = 0;
    let flipsLeft = k;
    let maxLength = 0;
    let currentLength = 0;

    while (endPoint < nums.length && startPoint < nums.length) {
        const num = nums[endPoint];
        if (num === 1 || (num === 0 && flipsLeft > 0)) {
            endPoint++;
            currentLength++;
            if (num === 0) flipsLeft--;
        } else if (num === 0 && flipsLeft === 0) {
            if (nums[startPoint] === 0) flipsLeft++;
            startPoint++;
            currentLength--;
        }
        maxLength = Math.max(maxLength, currentLength);
    }

    return maxLength;
};
