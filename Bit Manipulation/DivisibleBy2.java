// check if the number is divisible by 2

public static boolean powerOf2(int num) {
    int ans = (num & 1);   // we check if the last bit is zero
    if(ans == 0)
        return true;
    else
        return false;
}
