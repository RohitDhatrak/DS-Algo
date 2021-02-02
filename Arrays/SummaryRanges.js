// 228. Summary Ranges

// Time Complexity  O(n)
// Space Complexity O(1)

var summaryRanges = function(nums) {
    if (!nums.length) return [];
    let start = nums[0];
    let end = nums[0];
    const ans = [];
    for (let i = 0; i < nums.length; i++) {
        if (i < nums.length - 1 && nums[i] == nums[i + 1] - 1) {
            end = nums[i + 1];
        } else {
            if (start == end) ans.push(`${start}`);
            else ans.push(`${start}->${end}`);
            start = nums[i + 1];
            end = nums[i + 1];
        }
    }
    return ans;
};

// Look ahead approach
