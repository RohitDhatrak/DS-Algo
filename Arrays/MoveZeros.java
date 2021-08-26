// 283. Move Zeroes

// Time Complexity  O(n)
// Space Complexity O(1)

class Solution {
    public void moveZeroes(int[] nums) {
        int zeroCount = 0;
        int slowPtr = 0;
        for (int fastPtr: nums) {
            if (fastPtr != 0) {
                nums[slowPtr++] = fastPtr;
            } else {
                zeroCount++;
            }
        }
        for (int i = nums.length - 1; zeroCount > 0; i--, zeroCount--) {
            nums[i] = 0;
        }
    }
}
