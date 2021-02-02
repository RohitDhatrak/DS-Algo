// 169. Majority Element

// Time Complexity  O(n)
// Space Complexity O(1)

var majorityElement = function (nums) {
    let count = 0;
    let maxElement = nums[0];
    for (let i = 0; i < nums.length; i++) {
        if (count == 0) maxElement = nums[i];
        if (maxElement == nums[i]) count++;
        else count--;
    }
    return maxElement;
};
