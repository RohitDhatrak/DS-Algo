// 350. Intersection of Two Arrays II

// Time Complexity  O(n + m)
// Space Complexity O(n)

var intersect = function (nums1, nums2) {
    const map = new Map();
    const result = [];

    for (const element of nums1) {
        if (map.has(element)) {
            map.set(element, map.get(element) + 1);
        } else {
            map.set(element, 1);
        }
    }

    for (const element of nums2) {
        if (map.get(element)) {
            map.set(element, map.get(element) - 1);
            result.push(element);
        }
    }

    return result;
};

// If arrays are sorted we can use 2 pointer to build the reult array O(n + m), O(1)
// If arrays are sorted and one is larger than the other we can use binary serach O(nlogm), O(1)
