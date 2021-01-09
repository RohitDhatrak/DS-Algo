// Count the number of digits in a number

// Time Complexity  O(log(n))
// Space Complexity O(1)

function countDigits(num) {
    let count = 0;
    while (num != 0) {
        num = Math.floor(num / 10);

        count++;
    }
    return count;
}
