// print all the possible subsets of the array

public static void subSets(String[] arr, int n) {
    for (int i = 0; i < Math.pow(2, n); i++) {
        for (int j = 0; j < n; j++) {
            if ((i & (1 << j)) > 0) {
                System.out.print(arr[j] + " ");
            }
        }
        System.out.println();
    }
}
