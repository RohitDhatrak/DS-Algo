// 1004. Max Consecutive Ones III

// Time Complexity  O(n)
// Space Complexity O(1)

// Solution 1: sliding window (faster because of less ops)
public int longestOnes(int[] nums, int k) {
    int startPoint = 0;
    int endPoint = 0;
    int flipsLeft = k;
    int maxLength = 0;
    int currentLength = 0;

    while (endPoint < nums.length && startPoint < nums.length) {
        int num = nums[endPoint];
        if (num == 1 || (num == 0 && flipsLeft > 0)) {
            endPoint++;
            currentLength++;
            if (num == 0) flipsLeft--;
        } else if (num == 0 && flipsLeft == 0) {
            if (nums[startPoint] == 0) flipsLeft++;
            startPoint++;
            currentLength--;
        }
        maxLength = Math.max(maxLength, currentLength);
    }

    return maxLength;
}

// Solution 2: check two pointers folder
