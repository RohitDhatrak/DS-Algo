// count the no of ones in the binary representation of the number

public static int NoOf1s(int num) {
    int count = 0;
    while (num > 0) {
        num = num & (num - 1);
        count++;
    }
    return count;
}
