// 350. Intersection of Two Arrays II

// Time Complexity  O(n + m)
// Space Complexity O(n)

class Solution {
    public int[] intersect(int[] nums1, int[] nums2) {
        HashMap<Integer, Integer> map = new HashMap<>();
        ArrayList<Integer> intersection = new ArrayList();

        for (int element: nums1) {
            if (map.containsKey(element)) {
                map.replace(element, map.get(element) + 1);
            } else {
                map.put(element, 1);
            }
        }

        for (int element : nums2) {
            if (map.containsKey(element) && map.get(element) != 0) {
                map.replace(element, map.get(element) - 1);
                intersection.add(element);
            }
        }
        
        int[] result = new int[intersection.size()];
        for (int i = 0; i < intersection.size(); i++) {
            result[i] = intersection.get(i);
        }
        return result;
    }
}

// If arrays are sorted we can use 2 pointers to build the result array O(n + m), O(1)
// If arrays are sorted and one is larger than the other we can use binary serach O(nlogm), O(1)
