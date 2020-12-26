// Rotate a number k times (if k is positive rotate right if negative rotate left)
// The input can be greater than the number of digits

public static int rotateNumber(String num, int k) {

    boolean flag = true;
    if (k < 0) {
        k = -k;
        flag = false;
    }
    while (k >= num.length())  // reducing the extra work if k is >= number of digits
        k -= num.length();
    if(k == 0)
        return Integer.parseInt(num);

    String[] numArr = num.split("");
    for (int i = 0; i < k; i++) {

        if (flag) {     // right shift
            String temp = numArr[num.length() - 1];
            for (int j = num.length() - 1; j > 0; j--)
                numArr[j] = numArr[j - 1];
            numArr[0] = temp;
        } else {       // left shift
            String temp = numArr[0];
            for (int j = 0; j < num.length() - 1; j++)
                numArr[j] = numArr[j + 1];
            numArr[num.length() - 1] = temp;
        }
    }

    String str = "";
    for (int i = 0; i < num.length(); i++)
        str += numArr[i];
    return Integer.parseInt(str);
}
