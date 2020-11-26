public static int kadanes(int[] arr) {
    int currentSum = 0;
    int maxSum = Integer.MIN_VALUE;
    for(int i = 0; i < arr.length; i++){
        if(currentSum < 0)
            currentSum = 0;
        currentSum += arr[i];
        if(currentSum > maxSum)
            maxSum = currentSum;
    }
    return maxSum;
}
