// Reverse an integer number

// Time Complexity  O(log(n))
// Space Complexity O(1)

function reverseNumber(num) {
    let count = 0;
    let temp = num;
    let ans = 0;
    while (temp != 0) {
        temp = Math.floor(temp / 10);
        count++;
    }
    while (num != 0) {
        let digit = num % 10;
        num = Math.floor(num / 10);
        ans += digit * Math.pow(10, count - 1);
        count--;
    }
    return ans;
}
