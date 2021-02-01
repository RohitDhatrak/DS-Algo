// 169. Majority Element

// Time Complexity  O(n)
// Space Complexity O(n)

var majorityElement = function(nums) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (map.has(num)) {
            map.set(num, map.get(num) + 1);
            if (map.get(num) > nums.length / 2) return num;
        } else {
            map.set(num, 1);
        }
    }
    return nums[0]
};
