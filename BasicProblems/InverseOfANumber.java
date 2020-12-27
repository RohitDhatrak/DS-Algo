// Question
// if the number is 5 digits long, it'll contain all the digits from 1 to 5 without missing and repeating any digit from 1 to 5
// If we have a number 426135 here we can see that 5 is in the 1st position and 3 is in the 2nd position
// To calculate inverse of a number we'll put 1 in the 5th place and 2 in the 3rd place doing so for all the digits
// so the inverse would be 416253

// Time Complexity  O(log(num))
// Space Complexity O(1)

public static int inverseOfANumber(int num) {
    int ans = 0;
    int count = 1;
    while (num != 0) {
        int power = num % 10;
        num /= 10;
        ans += count * Math.pow(10, power - 1);
        count++;
    }
    return ans;
}
