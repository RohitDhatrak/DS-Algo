// 121. Best Time to Buy and Sell Stock

// Time Complexity  O(n)
// Space Complexity O(1)

var maxProfit = function (prices) {
    let minPrice = prices[0];
    let maxProfit = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] <= minPrice) {
            minPrice = prices[i];
        } else {
            const newProfit = prices[i] - minPrice;
            if (newProfit > maxProfit) {
                maxProfit = newProfit;
            }
        }
    }
    return maxProfit;
};
