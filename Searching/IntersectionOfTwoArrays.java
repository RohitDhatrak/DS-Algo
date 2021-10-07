// 349. Intersection of Two Arrays

// assuming arrays are sorted
// Solution 1: using binary search
// Time Complextiy  O(nlogm)
// Space Complexity O(1)

class Solution {
    public int[] intersection(int[] nums1, int[] nums2) {
        Arrays.sort(nums1);
        Arrays.sort(nums2);

        int[] smaller = nums1.length <= nums2.length ? nums1 : nums2;
        int[] larger = nums1.length > nums2.length ? nums1 : nums2;
        int lastNum = -1;
        
        ArrayList<Integer> list = new ArrayList<Integer>();

        for (int num: smaller) {
            if (num != lastNum && binarySearch(larger, num) ) {
                list.add(num);
            }
            lastNum = num;
        }

        int[] ans = new int[list.size()];
        for (int i = 0; i < list.size(); i++) {
            ans[i] = list.get(i);
        }

        return ans;
    }
    
    public boolean binarySearch(int[] nums, int target) {
        int start = 0;
        int end = nums.length - 1;

        while (start <= end) {
            int mid = (start + end) / 2;
            if (nums[mid] == target) {
                return true;
            } else if (nums[mid] < target) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
        return false;
        
    }
}

// Solution 2: in arrays folder
// Solution 3: in 2 pointer folder
