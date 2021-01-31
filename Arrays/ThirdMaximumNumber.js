// Find the third maximum number in the array if it doesn't exist return the largest nuber

// Time Complexity  O(n)
// Space Complexity O(1)

var thirdMax = function (nums) {
    let first = Number.MIN_SAFE_INTEGER;
    let second = Number.MIN_SAFE_INTEGER;
    let third = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == first || nums[i] == second || nums[i] == third) continue;
        if (nums[i] > first) {
            third = second;
            second = first;
            first = nums[i];
        } else if (nums[i] > second) {
            third = second;
            second = nums[i];
        } else if (nums[i] > third) {
            third = nums[i];
        }
    }
    if (third == Number.MIN_SAFE_INTEGER) return first;
    else return third;
};
