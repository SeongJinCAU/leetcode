function maxProfit(prices: number[]): number {
    //DP Kadane's Algorithm
    let length: number = prices.length;
    let maxProfit: number = 0;
    let minPrice: number = prices[0];
    for(let i: number = 1; i < length; i++){
        let profit: number = prices[i] - minPrice;
        maxProfit = maxProfit > profit? maxProfit : profit;
        minPrice = minPrice < prices[i]? minPrice : prices[i];
    }
    return maxProfit;
};