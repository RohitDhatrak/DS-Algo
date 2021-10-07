// 349. Intersection of Two Arrays

// Time Complexity:  O(n) assuming arrays are sorted
// Space Complexity: O(1)

public int[] intersection(int[] nums1, int[] nums2) {
    Arrays.sort(nums1);
    Arrays.sort(nums2);
    ArrayList<Integer> list = new ArrayList<Integer>();
    int ptr1 = 0;
    int ptr2 = 0;

    while (ptr1 < nums1.length && ptr2 < nums2.length) {
        if (nums1[ptr1] < nums2[ptr2]) {
            ptr1 = goToNextValue(ptr1, nums1);
        } else if (nums1[ptr1] > nums2[ptr2]) {
            ptr2 = goToNextValue(ptr2, nums2);
        } else {
            list.add(nums1[ptr1]);
            ptr1 = goToNextValue(ptr1, nums1);
            ptr2 = goToNextValue(ptr2, nums2);
        }
    }

    int[] output = new int[list.size()];
    for (int i = 0; i < list.size(); i++) {
        output[i] = list.get(i);
    }
    return output;
}

public int goToNextValue(int pointer, int[] array) {
    int prevValue = array[pointer];
    while (pointer < array.length  && array[pointer] == prevValue) {
        pointer++;
    }
    return pointer;
}

// Solution 2: in arrays folder
// Solution 3: in search folder
