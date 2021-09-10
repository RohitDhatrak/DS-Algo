// 278. First Bad Version

// Time Complexity  O(logn)
// Space Complexity O(1)

public int firstBadVersion(int n) {
    int start = 1;
    int end = n;

    while (start <= end) { // = is necessary
        int mid = start + (end - start) / 2; // Overflow issues
        if (isBadVersion(mid)) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return end + 1; // or return start;
}
