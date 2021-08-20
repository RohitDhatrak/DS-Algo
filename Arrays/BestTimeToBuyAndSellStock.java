// 121. Best Time to Buy and Sell Stock

// Time Complexity  O(n)
// Space Complexity O(1)

public static int maxProfit(int[] prices) {
    int minPrice = prices[0];
    int maxProfit = 0;
    for (int i = 1; i < prices.length; i++) {
        if (prices[i] <= minPrice) {
            minPrice = prices[i];
        } else {
            int newProfit = prices[i] - minPrice;
            if (newProfit > maxProfit) {
                maxProfit = newProfit;
            }
        }
    }
    return maxProfit;
}
