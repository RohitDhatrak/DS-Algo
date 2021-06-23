// We split the array in half and then recursively splits the halves untill we have an array of one element.
// A single element is always sorted in itself so we can recursively merge the parts to get a sorted array.

// Implementation 1

// Time Complexity  O(nlogn)
// Space Complexity O(nlogn)

function mergeSort(arr) {
    if (arr.length === 1) {
        return arr;
    }
    const middleIdx = Math.trunc(arr.length / 2);
    const leftHalf = mergeSort(arr.slice(0, middleIdx));
    const rightHalf = mergeSort(arr.slice(middleIdx));
    return merge(leftHalf, rightHalf);
}

function merge(arr1, arr2) {
    const mergedArray = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i++]);
        } else {
            mergedArray.push(arr2[j++]);
        }
    }
    while (i < arr1.length) {
        mergedArray.push(arr1[i++]);
    }
    while (j < arr2.length) {
        mergedArray.push(arr2[j++]);
    }
    return mergedArray;
}


// Implementation 2

// Time Complexity  O(nlogn)
// Space Complexity O(n)
