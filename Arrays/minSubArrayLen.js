// function takes two arguments one is an array of +ve integers second is a +ve integer
// function should return min length of the contiguous sub array of which the sum is greater than or equal to the second argument
// return 0 if no such such sub array exists

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
