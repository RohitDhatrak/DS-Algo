// Time Complexity  O(n)
// Space Complexity O(1)

var maxArea = function(height) {
    let length = height.length - 1;
    let leftPtr = 0;
    let rightPtr = height.length - 1;
    let maxArea = 0;
    
    while (leftPtr < rightPtr){
        const area = length * Math.min(height[leftPtr], height[rightPtr]);
        maxArea = Math.max(maxArea, area);
        
        length--;
        if (height[leftPtr] <= height[rightPtr])
            leftPtr++;
        else
            rightPtr--;
    }
    
    return maxArea;
};
