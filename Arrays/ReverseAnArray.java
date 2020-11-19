// We use two pointers and keep swapping the values

// Method 1 - Iterative Method
// Time Complexity O(n)
// Space Complexity O(1)
public static void reverseArray(int arr[]) {
    for (int i = 0, j = arr.length - 1; i < j; i++, j--) {   
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}
    
// Method 2 - Using a Recursive Fuction
// Time Complexity O(n)
// Space Complexity O(1)
public static void reverseArray(int arr[], int i, int j) {       
    if (i>=j)
        return;
    reverseArray(arr, i + 1, j - 1);
    int temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
