// Return true if the array contains duplicates return false if it doesn't
// 217. Contains Duplicate

// Time Complexity  O(n)
// Space Complexity O(n)

public boolean containsDuplicate(int[] nums) {
    HashSet<Integer> set = new HashSet<>();
    for (int i = 0; i < nums.length; i++) {
        if (set.contains(nums[i])) {
            return true;
        } else {
            set.add(nums[i]);
        }
    }
    return false;
}
