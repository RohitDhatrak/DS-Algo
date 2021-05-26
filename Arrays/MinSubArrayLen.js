// function takes two arguments one is an array of +ve integers second is a +ve integer
// function should return min length of the contiguous sub array of which the sum is greater than or equal to the second argument
// return 0 if no such such sub array exists

// minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
// minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
// minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
// minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
// minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
// minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
// minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0

function minSubArrayLen(arr, minSum) {
    let start = 0;
    let end = 1;
    let minLen = Number.MAX_SAFE_INTEGER;
    let sum = arr[start] + arr[end];

    while (end < arr.length) {
        if (sum >= minSum) {
            if (end - start + 1 < minLen) {
                minLen = end - start + 1;
            }
            sum -= arr[start++];
        } else {
            sum += arr[++end];
        }
    }

    return minLen === Number.MAX_SAFE_INTEGER ? 0 : minLen;
}
