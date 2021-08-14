// Find the unique number in the array (every other number occurs twice)
// 136. Single Number

function findUnique(arr) {
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
        num = num ^ arr[i];
    }
    return num;
}

// Find two unique numbers from an array (every other number occurs twice)

function find2Unique(arr) {
    let diff = 0;
    let oneNo = 0;
    let ans = [];
    for (let i = 0; i < arr.length; i++) {
        diff = diff ^ arr[i]; // this will give the diff btw the 2 unique num
    }
    for (let i = 0; i < arr.length; i++) {
        if ((arr[i] & diff) > 0)
            // we'll check all the numbers that have the diff
            oneNo = oneNo ^ arr[i]; // and xor them to find one of the unique numbers
    }
    ans[0] = oneNo;
    ans[1] = oneNo ^ diff; // by applying xor to the number and the diff we get the second unique number
    return ans;
}

// Find one unique numbers from an array (every other number occurs thrice)

function findUnique3(arr) {
    let ans = 0;
    for (let i = 0; i < 64; i++) {
        // we count the no of set bits in all 64 places
        let count = 0;
        for (let j = 0; j < arr.length; j++) {
            if ((arr[j] & (1 << i)) > 0) count++;
        }
        if (count % 3 != 0) {
            // the count will be divisible by 3 if the number is repeated thrice
            ans = ans | (1 << i);
        }
    }
    return ans;
}
