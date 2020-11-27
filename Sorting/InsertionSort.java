// We take an element and insert it in the right place

// Time Complexity O(n^2)
// Space Complexity O(1)
// In-place, Stable, Adaptive, Online

public static void insertionSort(int [] arr){
    for(int i = 1; i < arr.length; i++){
        int current = arr[i];
        int j = i - 1;
        while(arr[j] > current && j >= 0){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = current;
    }
}
