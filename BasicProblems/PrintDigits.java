// Print the digits of a number from left to right

// Time Complexity  O(log(n))
// Space Complexity O(1)

public static void printDigits(int num) {
    int count = 0;
    int temp = num;
    while (temp != 0) {
        temp /= 10;
        count++;
    }
    while (count != 0) {    // A number like 3000 will be an edge case if we check for num != 0
        int digit = num / (int)Math.pow(10, count - 1);
        num %= Math.pow(10, count - 1);
        count--;
        System.out.println(digit);
    }
}
