// 349. Intersection of Two Arrays

// Time Complexity:  O(n)
// Space Complexity: O(n)

var intersection = function (nums1, nums2) {
    const map = new Map();
    const output = [];
    for (const num of nums1) {
        if (!map.has(num)) {
            map.set(num, 1);
        }
    }
    for (const num of nums2) {
        if (map.has(num)) {
            output.push(num);
            map.delete(num);
        }
    }
    return output;
};

// Solution 2: in search folder
// Solution 3: in 2 pointer folder
