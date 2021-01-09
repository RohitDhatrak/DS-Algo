// Kadane's algorithm - used to find the maximum subarray sum
// at every iteration we choose the greater number between arr[i] and currentSum + arr[i]
// from the above statement we can conclude that whenever the currentSum becomes less than 0 we'll reset the currentSum 
// because arr[i] will always be greater than currentSum + arr[i] if currentSum is negative

// Time Complexity O(n)
// Space Complexity O(1)

function kadanes(arr) {
    let currentSum = 0;
    let maxSum = Number.MIN_VALUE;
    for (let i = 0; i < arr.length; i++) {
        if (currentSum < 0) 
            currentSum = 0;
        currentSum += arr[i];
        if (currentSum > maxSum) 
            maxSum = currentSum;
    }
    return maxSum;
}
