// Find the unique number in the array (every other number occurs twice)

public static int findUnique(int[] arr) {
    int num = 0;
    for (int i = 0; i < arr.length; i++) {
        num = num ^ arr[i];
    }
    return num;
}

// Find two unique numbers from an array (every other number occurs twice)

public static int[] find2Unique(int[] arr) {
    int diff = 0;
    int oneNo = 0;
    int[] ans = new int[2];
    for (int i = 0; i < arr.length; i++) {
        diff = diff ^ arr[i];                  // this will give the diff btw the 2 unique num
    }
    for (int i = 0; i < arr.length; i++) {
        if ((arr[i] & diff) > 0)               // we'll check all the numbers that have the diff
            oneNo = oneNo ^ arr[i];            // and xor them to find one of the unique numbers
    }
    arr[0] = oneNo; 
    arr[1] = oneNo ^ diff;                     // by applying xor to the number and the diff we get the second unique number
    return arr;
}

// Find one unique numbers from an array (every other number occurs thrice)

public static int findUnique3(int[] arr) {
    int ans = 0;
    for (int i = 0; i < 64; i++) {                   // we count the no of set bits in all 64 places
        int count = 0;
        for (int j = 0; j < arr.length; j++) {
            if ((arr[j] & 1 << i) > 0)
                count++;
        }
        if (count % 3 != 0) {                        // the count will be divisible by 3 if the number is repeated thrice
            ans = ans | 1 << i;
        }
    }
    return ans;
}
