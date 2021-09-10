// 278. First Bad Version

// Time Complexity  O(logn)
// Space Complexity O(1)

var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let start = 1;
        let end = n;

        while (start <= end) {
            const mid = Math.floor((start + end) / 2);
            if (isBadVersion(mid)) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }

        return end + 1;
    };
};
