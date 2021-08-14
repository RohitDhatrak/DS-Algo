// 448. Find All Numbers Disappeared in an Array

// Time Complexity  O(n)
// Space Complexity O(1)

public List<Integer> findDisappearedNumbers(int[] nums) {
    ArrayList<Integer> result = new ArrayList<Integer>();
    for (int i = 0; i < nums.length; i++) {
        int temp = Math.abs(nums[i]) - 1;
        if (nums[temp] > 0) {
            nums[temp] = -1 * nums[temp];
        }
    }
    for (int i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            result.add(i + 1);
        }
    }
    return result;
}
