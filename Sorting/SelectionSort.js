// In each iteration we select the minimum element from the unsorted part of the array and replace it with the first unsorted element

// Same for best, avg and worst case
// Time Complexity O(n^2)
// Space Complexity O(1)

// In-place 
// Not Stable, Not Adaptive, Not Online
// We can make this algorithm stable by shifting all elements to the right and putting the min element in the empty slot.

function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minPos = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minPos]) {
                minPos = j;
            }
        }
        if (minPos !== i) {
            [arr[i], arr[minPos]] = [arr[minPos], arr[i]];
        }
    }
    return arr;
}
