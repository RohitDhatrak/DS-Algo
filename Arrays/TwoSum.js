// Return index of two elements in the array (nums) which add up to the target

// Time Complexity  O(n)
// Space Complexity O(n)

function twoSum(nums, target) {
    const map = new Map();
    
    for(let [i, num] of nums.entries()){
        if(map.has(target - num)){
            return [map.get(target - num), i];
        } else{
            map.set(num,i);
        }
    }
};
