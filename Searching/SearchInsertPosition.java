// 35. Search Insert Position

// Time Complexity  O(logn)
// Space Complexity O(1)

public int searchInsert(int[] nums, int target) {
    int start = 0;
    int end = nums.length - 1;

    while (start <= end) { // = is necessary
        int mid = (start + end) / 2;
        if (nums[mid] == target) {
            return mid;
        } else if (nums[mid] > target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return end+1; // or return start;
}
