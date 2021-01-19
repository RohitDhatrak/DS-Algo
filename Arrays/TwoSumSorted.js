// Given a sorted array return the index of two elements which add upto the target

// Time Complexity  O(n)
// Space Complextiy O(1)

function twoSum(numbers, target) {
    let i = 0;
    let j = numbers.length - 1;
    while (i < j) {
        if (numbers[i] + numbers[j] == target)
            return [i+1, j+1];
        else if (numbers[i] + numbers[j] > target)
            j--;
        else
            i++;
    }
}
