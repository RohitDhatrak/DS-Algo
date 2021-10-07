// 349. Intersection of Two Arrays

// assuming arrays are sorted
// Solution 1: using binary search
// Time Complextiy  O(nlogm)
// Space Complexity O(1)

var intersection = function(nums1, nums2) {
    nums1 = nums1.sort((a, b) => a - b);
    nums2 = nums2.sort((a, b) => a - b);

    const smaller = nums1.length <= nums2.length ? nums1 : nums2;
    const larger = nums1.length > nums2.length ? nums1 : nums2;
    let lastNum = -1;
    const ans = [];

    for (const num of smaller) {
        if (num !== lastNum && binarySearch(larger, num)) {
            ans.push(num);
        }
        lastNum = num;
    }
    return ans;
};

function binarySearch(nums, target) {
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        let mid = Math.round((start + end) / 2);
        if (nums[mid] === target) {
            return true;
        } else if (nums[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return false
};

// Solution 2: in arrays folder
// Solution 3: in 2 pointer folder
