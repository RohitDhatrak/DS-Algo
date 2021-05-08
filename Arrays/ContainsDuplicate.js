// Return true if the array contains duplicates return false if it doesn't

// Time Complexity  O(n)
// Space Complexity O(n)

var containsDuplicate = function(nums) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            return true;
        } else {
            map.set(nums[i], 1);
        }
    }
    return false;
};
