// In each iteration we select the minimum element from the unsorted part of the array and replace it with the first unsorted element

// Time Complexity O(n^2)
// Space Complexity O(1)
// In-place, not stable, not adaptive, not online
public static void selectionSort(int [] arr){
    for(int i = 0; i < arr.length - 1; i++){
        int minIndx = i;
        for(int j = i + 1; j < arr.length; j++){
            if(arr[minIndx] > arr[j])
                minIndx = j;
        }
        int temp = arr[i];
        arr[i] = arr[minIndx];
        arr[minIndx] = temp; 
    }
}
