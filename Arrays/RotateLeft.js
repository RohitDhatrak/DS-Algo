// Rotate an array left d times

// Time Complexity  O(logn * n)    (because d = logn)
// Space Complexity O(1)

// optimal solution T: O(n) S: O(n)

function rotateLeft(d, arr) {
    d %= arr.length;
    for (let i = 0; i < d; i++){
        let temp = arr[0];
        for (let j = 0; j < arr.length - 1; j++){
            arr[j] = arr[j + 1];
        }
        arr[arr.length - 1] = temp;
    }
    return arr;
}
