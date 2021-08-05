// Rotate an array left d times

// Time Complexity  O(d * n)
// Space Complexity O(1)

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

// Time Complexity  O(n)
// Space Complexity O(n)
function rotateLeft(d, arr) {
    d %= arr.length;
    const rotatedArray = [];
    for (let i = d; i < arr.length; i++) {
        rotatedArray[i - d] = arr[i];
    }
    for (let i = 0, j = arr.length - d; i < d; i++, j++) {
        rotatedArray[j] = arr[i];
    }
    return rotatedArray;
}
