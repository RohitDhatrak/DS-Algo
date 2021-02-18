// Subarray with given sum

// Time Complexity  O(n)
// Space Complexity O(1)

public static ArrayList<Integer> subArrSum(int[] arr, int n, int s){
    int i = 0;
    int j = 0;
    int sum = 0;
    ArrayList<Integer> ans = new ArrayList<>();
    while (i < n) {
        if (sum < s) {
            if (j >= n) {
                break;
            }
            sum += arr[j];
            j++;
        } else if (sum > s) {
            sum -= arr[i];
            i++;
        } else {
            ans.add(i + 1);
            ans.add(j);
            return ans;
       }
    }
    ans.add(-1);
    return ans;
}
