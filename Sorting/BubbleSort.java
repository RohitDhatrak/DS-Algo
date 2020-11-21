// In each iteration we compare the current element with the next element and swap them if they are in wrong order

// Time Complexity O(n^2)
// Space Complexity O(1)
public static void bubbleSort(int [] arr){
    for(int i = 1; i < arr.length; i++) {
        for(int j = 0; j < arr.length - i; j++) {
            if(arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}
