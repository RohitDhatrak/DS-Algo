// In each iteration we compare the current element with the next element and swap them if they are in wrong order

// Time Complexity O(n^2)
// Space Complexity O(1)
// In-place, Stable, Adaptive, Not Online

function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}
