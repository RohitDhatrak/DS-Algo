// Reverse an integer number

// Time Complexity  O(n)
// Space Complexity O(1)

public static int reverseNumber(int num) {
    int count = 0;
    int temp = num;
    int ans = 0;
    while (temp != 0) {
        temp /= 10;
        count++;
    }
    while (count != 0) {
        int digit = num % 10;
        num /= 10;
        ans += digit * Math.pow(10, count - 1);
        count--;
    }
    return ans;
}
