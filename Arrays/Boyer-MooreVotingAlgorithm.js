// This algorithm can be used to find a element that appears more than floor(n/2) times in an array
// Because the majority element appears more than n/2 times in the array i.e a minimum of floor(n/2) + 1 times out of n
// Therefore even if all the minority elements cancel out the majority elements one instance of majority element will be left in case of odd no of elements
// and minimum two instances will be left in case of even no of elements

// 169. Majority Element

// Time Complexity  O(n)
// Space Complexity O(1)

var majorityElement = function (nums) {
    let count = 0;
    let maxElement = nums[0];
    for (let i = 0; i < nums.length; i++) {
        if (count == 0) maxElement = nums[i];
        if (maxElement == nums[i]) count++;
        else count--;
    }
    return maxElement;
};
