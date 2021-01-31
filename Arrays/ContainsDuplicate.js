// Return true if the array contains duplicates return false if it doesn't

// Time Complexity  O(n)
// Space Complexity O(n)

var containsDuplicate = function(nums) {
    let count = {};
    for (let i = 0; i < nums.length; i++) {
        if (count[nums[i]] == undefined) {
            count[nums[i]] = 1;
        } else {
            return true;
        }
    }
    return false;
};
