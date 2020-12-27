// Rotate a number k times (if k is positive rotate right if negative rotate left)
// k can be greater than the number of digits

// Time Complexity  O((log10(num))^2)
// Space Complexity O(log10(num))

public static int rotateNumber(int num, int k) {

    int temp = num;
    int size = 0;
    while (temp != 0) {
        temp /= 10;
        size++;
    }

    if (size == 0)        // edge case num = 0
        return num;

    if (k < 0) {          // edge case if k is -ve and greater than length
        k = -k;
        if (k >= size)
            k %= size;
        k = size - k;
    }

    if (k >= size)       // edge case if k is greater than length
        k %= size;

    if (k == 0)
        return num;

    int digits = num % (int)Math.pow(10, k);
    num /= (int) Math.pow(10, k); 

    digits *= Math.pow(10, (size - k));
    num += digits;

    return num;
}
