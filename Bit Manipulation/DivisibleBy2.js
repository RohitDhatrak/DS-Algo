// check if the number is divisible by 2

function powerOf2(num) {
    let ans = num & 1; // we check if the last bit is zero
    if (ans == 0) 
        return true;
    else 
        return false;
}
