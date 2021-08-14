// Leetcode - 27. Remove Element

// Time Complexity  O(n)
// Space Complexity O(1)

var removeElement = function(nums, val) {
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[j] == val && nums[i] != val) {
            const temp = nums[j];
            nums[j] = nums[i];
            nums[i] = temp;
        }
        if (nums[j] != val) {
            j++;
        }
    }
    return j;
};
