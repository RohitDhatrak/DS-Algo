// Return index of two elements in the array (nums) which add up to the target
// Time Complexity  O(n)
// Space Complexity O(n)

function twoSum(nums, target) {
    let temp = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (temp.has(target - nums[i])) {
            return [i, temp.get(target - nums[i])];
        }
        temp.set(nums[i], i);
    }
};
