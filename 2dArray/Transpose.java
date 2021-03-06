// Time Complexity O(n^2)
// Space Complexity O(1)

public static void transpose(int[][] arr, int row, int column){
    for(int i = 0; i < row; i++){
        for(int j = i; j < column; j++){
            int temp = arr[i][j];
            arr[i][j] = arr[j][i];
            arr[j][i] = temp;
        }
    }
}
