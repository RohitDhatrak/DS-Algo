// Searching an element in a sorted 2d array
// We start from top right corner or bottom left corner (from other two corners elements only increase or decrease)
// If the element is greater than the key we reduce the column and if it is lesser than the key we increment the row

// Time Complexity O(n)
// Space Complexity O(1)

public static void search(int[][] arr,int key, int row, int column){
    int r = 0;              // row
    int c = column - 1;     // column
    boolean flag = false;

    while(r < row && c > 0){
        if(key == arr[r][c]){
            System.out.println("Element Found");
            flag = true;
            break;
        }else{
            if(arr[r][c] > key)
                c--;
            else
                r++;
        }
    }
    if(!flag)
        System.out.println("Element not Found");
}
