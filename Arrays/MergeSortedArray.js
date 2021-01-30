// 88. Merge Sorted Array

// Time Complexity  O(m + n)
// Space Complexity O(m + n)

// optimal solution T: O(m + n) S: O(1)

var merge = function(nums1, m, nums2, n) {
    let ans = [];
    let ansLen = 0;
    let i = 0;
    let j = 0;
    while (i < m && j < n) {
        if (nums1[i] <= nums2[j]) 
            ans[ansLen++] = nums1[i++];
        else 
            ans[ansLen++] = nums2[j++];
    }
    if (i < m) 
        for (let k = i; k < m; k++) 
            ans[ansLen++] = nums1[k];
    if (j < n) 
        for (let k = j; k < n; k++) 
            ans[ansLen++] = nums2[k];
    for (let k = 0; k < ans.length; k++) 
        nums1[k] = ans[k];
};
