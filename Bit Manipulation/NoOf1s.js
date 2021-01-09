// count the no of ones in the binary representation of the number

function noOf1s(num) {
    let count = 0;
    while (num > 0) {
        num = num & (num - 1);
        count++;
    }
    return count;
}
