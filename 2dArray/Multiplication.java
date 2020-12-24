// Multiply a 2D matrix
// int[][] arr1 = new int[n1][n2];
// int[][] arr2 = new int[n2][n3];
// int[][] ans = new int[n1][n3];

// Time Complexity O(n^3)
// Space Complexity O(1)

public static int[][] multiplication(int[][] arr1, int[][] arr2, int n1, int n2, int n3){
    int[][] ans;
    for(int i = 0; i < n1; i++){
        for(int j = 0; j < n3; j++){
            for(int k = 0; k < n2; k++){
                ans[i][j] += arr1[i][k] * arr2[k][j];
            }
        }
    }
    return ans;
}
