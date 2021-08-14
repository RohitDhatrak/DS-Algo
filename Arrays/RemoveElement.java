public static int removeElement(int[] nums, int val) {
    int j = 0;
    for (int i = 0; i < nums.length; i++) {
        if (nums[j] == val && nums[i] != val) {
            int temp = nums[j];
            nums[j] = nums[i];
            nums[i] = temp;
        }
        if (nums[j] != val) {
            j++;
        }
    }
    return j;
} 
