// Find the unique number in the array (every other number occurs twice)
// 136. Single Number

public int singleNumber(int[] nums) {
    int num = 0;
    for (int i = 0; i < nums.length; i++) {
        num = num ^ nums[i];
    }
    return num;
}
