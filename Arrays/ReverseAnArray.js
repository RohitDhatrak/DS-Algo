// We use two pointers and keep swapping the elements

// Time Complexity O(n)
// Space Complexity O(1)

function reverseArray(arr) {
    for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}
