// Count the number of digits in a number

// Time Complexity  O(n)
// Space Complexity O(1)

public static int countDigits(int num) {
    int count = 0;
    while (num != 0) {
        num /= 10;
        count++;
    }
    return count;
}
