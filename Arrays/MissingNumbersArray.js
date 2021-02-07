// 448. Find All Numbers Disappeared in an Array

// Time Complexity  O(n)
// Space Complexity O(1)

var findDisappearedNumbers = function(nums) {
    const ans = [];
    for (let i = 0; i < nums.length; i++) {
        let temp = Math.abs(nums[i]) - 1;
        if (nums[temp] > 0) {
            nums[temp] = -1 * nums[temp];
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) ans.push(i + 1);
    }
    return ans;
};
