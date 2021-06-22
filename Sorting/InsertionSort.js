// We take an element from the unsorted part and insert it in the right place in the sorted part
// Initially one element would be sorted because a single elment is always sorted in itself

// Complexity          Best                        Average                    Worst

// Time                O(n)                        O(n^2)                     O(n^2)

// Space               O(1)                         O(1)                       O(1)

// Stable, Adaptive, Online

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let j = i;
        while (arr[j - 1] > arr[j] && j >= 0) {
            [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
            j--;
        }
    }
    return arr;
}
