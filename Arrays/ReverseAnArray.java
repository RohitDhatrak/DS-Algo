// We use two pointers and keep swapping the elements

// Time Complexity O(n)
// Space Complexity O(1)

public static void reverseArray(int arr[]) {
    for (int i = 0, j = arr.length - 1; i < j; i++, j--) {   
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}
