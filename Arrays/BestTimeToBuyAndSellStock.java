// 121. Best Time to Buy and Sell Stock

// Time Complexity  O(n)
// Space Complexity O(1)

public static int maxProfit(int[] prices) {
    int buy = 0;
    int maxProfit = 0;

    for (int i = 0; i < prices.length - 1; i++) {
        if (prices[i + 1] < prices[buy]) {
            buy = i + 1;
        } else {
            if (prices[i + 1] - prices[buy] > maxProfit) {
                maxProfit = prices[i + 1] - prices[buy];
            }
        }
    }
    return maxProfit;
}
