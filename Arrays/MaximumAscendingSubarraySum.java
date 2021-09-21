// 1800. Maximum Ascending Subarray Sum

// Time Complexity  O(n)
// Space Complexity O(1)

public int maxAscendingSum(int[] nums) {
    int maxSum = nums[0];
    int currentSum = nums[0];
    int ptr = 1;

    while (ptr < nums.length) {
        if (nums[ptr - 1] < nums[ptr]) {
            currentSum += nums[ptr];
            if (currentSum > maxSum) {
                maxSum = currentSum;
            }
        } else {
            currentSum = nums[ptr];
        }
        ptr++;
    }

    return maxSum;
}
