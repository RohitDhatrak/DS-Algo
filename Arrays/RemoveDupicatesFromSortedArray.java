// Leetcode - 26. Remove Duplicates from Sorted Array

// Time Complexity  O(n)
// Space Complexity O(1)

public static int removeDuplicates(int[] nums) {
    if (nums.length == 0) return 0;
    int lastPos = 0;
    for (int i = 1; i < nums.length; i++) {
        if (nums[i] > nums[lastPos]) {
            nums[++lastPos] = nums[i];
        }
    }
    return lastPos + 1;
}
