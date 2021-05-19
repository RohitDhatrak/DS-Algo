// 852. Peak Index in a Mountain Array

// Time Complexity  O(logn)
// Space Complexity O(1)

var peakIndexInMountainArray = function(arr) {
    let lhs = 0;
    let rhs = arr.length - 1;
    while(lhs <= rhs){
        const middle = Math.trunc((lhs + rhs) / 2);
        if(arr[middle + 1] < arr[middle] && arr[middle - 1] < arr[middle]){
            return middle;
        }else if (arr[middle + 1] > arr[middle]){
            lhs = middle + 1;
        }else{
            rhs = middle - 1;
        }
    }
};
