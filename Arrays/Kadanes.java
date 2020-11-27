// Kadane's algorithm
// at every iteration we choose the greater number between arr[i] and currentSum + arr[i]
// basically whenever the currentSum becomes less than 0 we'll reset the currentSum 
// because arr[i] will always be greater than currentSum + arr[i] if currentSum is negative

// Time Complexity O(n)
// Space Complexity O(1)

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
