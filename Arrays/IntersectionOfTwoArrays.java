// 349. Intersection of Two Arrays

// Solution 1: Using a hash map
// Time Complexity:  O(n)
// Space Complexity: O(n)

public int[] intersection(int[] nums1, int[] nums2) {
    HashSet<Integer> map = new HashSet<>();
    ArrayList<Integer> list = new ArrayList<>();
    for (int num : nums1) {
        if (!map.contains(num)) {
            map.add(num);
        }
    }
    for (int num : nums2) {
        if (map.contains(num)) {
            list.add(num); 
            map.remove(num);
        }
    }

    int[] output = new int[list.size()];
    for (int i = 0; i < list.size(); i++) {
        output[i] = list.get(i);
    }
    return output;
}

// Solution 2: in search folder
// Solution 3: in 2 pointer folder
