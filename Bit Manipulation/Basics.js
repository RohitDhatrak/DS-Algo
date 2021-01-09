// Basic operations like get bit, set bit, clear bit & update bit

function getBit(n, pos) {
    // get the bit at pos
    console.log("log" + (n & (1 << pos)));
    if (n & (1 << pos)) 
        return 1;
    else 
        return 0;
}

function setBit(n, pos) {
    // set the bit at pos
    return n | (1 << pos);
}

function clearBit(n, pos) {
    // clear the bit at pos
    return n & ~(1 << pos);
}

function updateBit(n, pos, val) {
    // update the bit at pos with give val
    if (val == 1) 
        return setBit(n, pos);
    else 
        return clearBit(n, pos);
}

