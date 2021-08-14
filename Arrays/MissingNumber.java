// Find the missing number from the range 0 to n

// Time Complexity  O(n)
// Space Complexity O(1)

public int missingNumber(int[] nums) {
    int expectedSum = (nums.length * (nums.length + 1)) / 2;
    int sum = 0;
    for(int i = 0; i < nums.length; i++){
        sum += nums[i];
    }
    return expectedSum - sum;
}

// bit manipulation

public int missingNumber(int[] nums) {
    int ans = 0;
    for(int i = 0; i < nums.length; i++){
        ans ^= nums[i];
    }
    for(int i = 0; i <= nums.length; i++){
        ans ^= i;
    }
    return ans;
}
