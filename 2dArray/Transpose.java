for(int i = 0; i < row; i++){
    for(int j = i; j < column; j++){
        int temp = arr[i][j];
        arr[i][j] = arr[j][i];
        arr[j][i] = temp;
    }
}
