// Leetcode - 27. Remove Element

// Time Complexity  O(n^2)
// Space Complexity O(1)

var removeElement = function(nums, val) {
    let length = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == val){
            for(let j = i + 1; j < nums.length; j++){
                if(nums[j]!=val){
                    let temp  = nums[i];
                    nums[i] = nums[j];
                    nums[j] = temp;
                    length++;
                    break;
                }
            }
        }
        else
            length++;
    }
    return length;
};
