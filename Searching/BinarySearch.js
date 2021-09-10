// Time Complexity  O(logn)
// Space Complexity O(1)

var binarySearch = function (nums, target) {
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        let mid = Math.round((start + end) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return -1;
};
