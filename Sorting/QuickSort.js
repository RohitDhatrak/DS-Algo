function pivotHelper(arr, startIdx = 0, endIdx = arr.length) {
    function swap(elem1, elem2) {
        [arr[elem1], arr[elem2]] = [arr[elem2], arr[elem1]];
    }
    const pivot = arr[startIdx];
    let pivotIndx = startIdx;
    for (let i = startIdx + 1; i < endIdx; i++) {
        if (pivot > arr[i]) {
            pivotIndx++;
            swap(i, pivotIndx);
        }
    }
    swap(startIdx, pivotIndx);
    return pivotIndx;
}

function quickSort(arr, startIdx = 0, endIdx = arr.length) {
    if (startIdx < endIdx) {
        const pivotIdx = pivotHelper(arr, startIdx, endIdx);
        if (endIdx - pivotIdx < pivotIdx - startIdx) {
            quickSort(arr, pivotIdx + 1, endIdx);
            quickSort(arr, startIdx, pivotIdx);
        } else {
            quickSort(arr, startIdx, pivotIdx);
            quickSort(arr, pivotIdx + 1, endIdx);
        }
    }
    return arr;
}
