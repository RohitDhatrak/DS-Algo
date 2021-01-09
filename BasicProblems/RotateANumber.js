// Rotate a number k times (if k is positive rotate right if negative rotate left)
// k can be greater than the number of digits

// Time Complexity  O(log(n))
// Space Complexity O(1)

function rotateNumber(num, k) {
    let temp = num;
    let size = 0;
    while (temp != 0) {
        temp = Math.floor(temp / 10);
        size++;
    }

    if (size == 0)
        // edge case num = 0
        return num;

    if (k < 0) {
        // edge case if k is -ve and greater than length
        k = -k;
        if (k >= size) k %= size;
        k = size - k;
    }

    if (k >= size)
        // edge case if k is greater than length
        k %= size;

    if (k == 0) return num;

    let digits = num % Math.pow(10, k);
    num = Math.floor(num / Math.pow(10, k));

    digits *= Math.pow(10, size - k);
    num += digits;

    return num;
}
