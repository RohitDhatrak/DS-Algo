// 66. Plus One

// Time Complexity  O(n)
// Space Complexity O(1) / O(n)

class Solution {
    public int[] plusOne(int[] digits) {
        int power = digits.length - 1;
        while (power >= 0) {
            if (digits[power] == 9) {
                if (power == 0) {
                    digits[power] = 0;
                    int[] newArray = new int[digits.length + 1];
                    newArray[0] = 1;
                    for (int i = 0; i < digits.length; i++) {
                        newArray[i+1] = digits[i];
                    }
                    return newArray;
                } else {
                    digits[power] = 0;
                }
                power--;
            } else {
                digits[power]++;
                return digits;
            }
        }

        return digits;
    }
}
