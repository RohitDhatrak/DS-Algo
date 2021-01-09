// Print the digits of a number from left to right

// Time Complexity  O(log(n))
// Space Complexity O(1)

function printDigits(num) {
    let count = 0;
    let temp = num;
    while (temp != 0) {
        temp = Math.floor(temp / 10);
        count++;
    }
    while (count != 0) {
        // A number like 3000 will be an edge case if we check for num != 0
        let digit = Math.floor(num / Math.pow(10, count - 1));
        num %= Math.pow(10, count - 1);
        count--;
        console.log(digit);
    }
}
