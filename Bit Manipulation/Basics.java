// Basic operations like get bit, set bit, clear bit & update bit

public static int getBit(int n, int pos) {  // get the bit at pos
    return n & (1 << pos);
}

public static int setBit(int n, int pos) {  // set the bit at pos
    return n | (1 << pos);
}

public static int clearBit(int n, int pos) {  // clear the bit at pos
    return n & (~(1 << pos));
}

public static int updateBit(int n, int pos, int val) { // update the bit at pos with give val
    if (val == 1)
        return setBit(n, pos);
    else
        return clearBit(n, pos);
}
