// Find the missing number from the range 0 to n

// Time Complexity  O(n)
// Space Complexity O(1)

var missingNumber = function(nums) {
    let expectedSum = 0;                   // expectedSum = n * (n + 1) / 2   -- Gauss' Formula
    let actualSum = 0;
    for (let i = 0; i <= nums.length; i++) {
        expectedSum += i;
    }
    for (let num of nums) {
        actualSum += num;
    }
    return expectedSum - actualSum;
};
