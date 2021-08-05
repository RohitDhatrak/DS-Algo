

function getDigit(num, pos) {
    return Math.floor(Math.abs(num) / Math.pow(10, pos)) % 10;
}

function getNumberOfDigits(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function getMaxNumberOfDigits(nums) {
    let maxDigits = 0;
    for (const num of nums) {
        maxDigits = Math.max(maxDigits, getNumberOfDigits(num));
    }
    return maxDigits;
}

function radixSort(nums) {
    const maxDigits = getMaxNumberOfDigits(nums);
    console.log(maxDigits);
    for (let i = 0; i < maxDigits; i++) {
        const buckets = [];
        for (const num of nums) {
            const digit = getDigit(num, i);
            if (buckets[digit]) {
                buckets[digit].push(num);
            } else {
                buckets[digit] = [num];
            }
        }
        nums = buckets.flat();
    }
    return nums;
}
