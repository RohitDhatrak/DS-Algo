// We compare each element in the array with the key

// Time Complexity O(n)
// Space Complexity O(1)
public static int linearSearch(int arr[], int key){
    for(int i = 0; i < arr.length; i++)
        if(arr[i] == key)
            return i;
    return -1;
}
