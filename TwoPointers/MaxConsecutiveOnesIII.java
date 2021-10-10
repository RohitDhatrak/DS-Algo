// 1004. Max Consecutive Ones III

// Time Complexity  O(n)
// Space Complexity O(1)

// Solution 1: two pointer approach (slower because of more ops)
public int longestOnes(int[] nums, int k) {
    int flipsLeft = k;
    int maxCount = 0;
    int count = 0;
    int flipPoint = 0;
    int startPoint = 0;

    while (startPoint < nums.length) {
        int num = nums[startPoint];
        if (num == 1) {
            count++;
            startPoint++;
        } else if (flipsLeft > 0) {
            if (flipsLeft == k) flipPoint = startPoint;
            count++;
            startPoint++;
            flipsLeft--;
        } else {
            count = 0;
            flipsLeft = k;
            startPoint = flipPoint + 1;
            if (k == 0) flipPoint = startPoint;
        }
        maxCount = Math.max(maxCount, count);
    }

    return maxCount; 
}

// Solution 2: check sliding window folder
