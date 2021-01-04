// Find the unique number in the array

public static int findUnique(int[] arr) {
    int num = 0;
    for (int i = 0; i < arr.length; i++) {
        num = num ^ arr[i];
    }
    return num;
}

// find two unique nums from an array

public static int[] find2Unique(int[] arr) {
    int diff = 0;
    int oneNo = 0;
    int[] ans = new int[2];
    for (int i = 0; i < arr.length; i++) {
        diff = diff ^ arr[i];                  // this will give the diff btw the 2 unique num
    }
    for (int i = 0; i < arr.length; i++) {
        if ((arr[i] & diff) > 0)               // we'll check all the elements that have the diff
            oneNo = oneNo ^ arr[i];            // and xor them to find one of the unique numbers
    }
    arr[0] = oneNo; 
    arr[1] = oneNo ^ diff;                     // by applying xor to the number and the diff we get the second unique number
    return arr;
}
