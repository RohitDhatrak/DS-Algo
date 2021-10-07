// 349. Intersection of Two Arrays

// assuming arrays are sorted
// Solution 1: Using 2 pointers
// Time Complexity:  O(n)
// Space Complexity: O(1)

var intersection = function(nums1, nums2) {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    let ptr1 = 0;
    let ptr2 = 0;
    const output = [];

    while (ptr1 < nums1.length && ptr2 < nums2.length) {
        if (nums1[ptr1] < nums2[ptr2]) {
            ptr1 = goToNextValue(ptr1, nums1);
        } else if (nums1[ptr1] > nums2[ptr2]) {
            ptr2 = goToNextValue(ptr2, nums2);
        } else {
            output.push(nums1[ptr1]);
            ptr1 = goToNextValue(ptr1, nums1);
            ptr2 = goToNextValue(ptr2, nums2);
        }
    }
    return output;
};

function goToNextValue(pointer, array) {
    const prevValue = array[pointer];
    while (array[pointer] === prevValue) {
        pointer++;
    }
    return pointer;
}

// Solution 2: in arrays folder
// Solution 3: in search folder
