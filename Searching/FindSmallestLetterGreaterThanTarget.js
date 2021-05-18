// 744. Find Smallest Letter Greater Than Target

// Time Complexity  O(logn)
// Space Complexity O(1)

var nextGreatestLetter = function(letters, target) {
    let start = 0;
    let end = letters.length - 1;
    while(start <= end){
        let mid = Math.trunc((start + end) / 2);
        if (target >= letters[mid]){
            start = mid + 1;
        }else{
            end = mid - 1;
        }
    }
    return letters[start % letters.length];
};
