// Time Complexity  O(n)
// Space Complexity O(1)

var twoSum = function(numbers, target) {
    let leftPtr = 0;
    let rightPtr = numbers.length - 1;
    
    while(leftPtr < rightPtr){
        const sum = numbers[leftPtr] + numbers[rightPtr];
        if (sum === target)
            return [++leftPtr, ++rightPtr];
        else if (sum > target)
            rightPtr--;
        else
            leftPtr++;
    }
};
