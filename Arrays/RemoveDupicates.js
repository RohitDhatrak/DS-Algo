// Leetcode - 26

var removeDuplicates = function(nums) {
    if (nums.length == 0) return 0;
    let nextPosition = 1;
    let currentNum = nums[0];
    let length = 1;
    for(let i = 1; i < nums.length; i++){
        if(nums[i] > currentNum){
            nums[nextPosition++] = nums[i];
            currentNum = nums[i];
            length++;
        }
    }
    return length;
};
