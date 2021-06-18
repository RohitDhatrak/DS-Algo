// In each iteration we compare the current element with the next element and swap them if they are in wrong order
// Optimization: If there are no swaps in the last iteration the array is sorted. (Adaptive)

// Complexity          Best                        Average                    Worst

// Time                O(n)                        O(n^2)                     O(n^2)

// Space               O(1)                         O(1)                       O(1)

// Parameter to consider while selectinga sorting algorithm
// In Place, Stable, Adaptive
// Not Online

function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let isSorted = true;
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j + 1] < arr[j]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                isSorted = false;
            }
        }
        if (isSorted) {
            return arr;
        }
    }
    return arr;
}
