function pivotHelper(arr, startIdx = 0, endIdx = arr.length) {
    const pivot = arr[startIdx];
    let pivotIndx = startIdx;
    for (let i = startIdx + 1; i < endIdx; i++) {
        if (pivot > arr[i]) {
            pivotIndx++;
            [arr[i], arr[pivotIndx]] = [arr[pivotIndx], arr[i]];
        }
    }
    [arr[startIdx], arr[pivotIndx]] = [arr[pivotIndx], arr[startIdx]];
    return pivotIndx
}

function quickSort(arr, startIdx = 0, endIdx = arr.length){
    if(startIdx < endIdx){
        const pivotIdx = pivotHelper(arr, startIdx, endIdx);
        quickSort(arr, startIdx, pivotIdx)
        quickSort(arr, pivotIdx + 1, endIdx);
    }
    return arr;
}
