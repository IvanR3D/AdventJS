export default function maxProfit(prices) {
    let diff = -1;
    for (let i = 0; i < prices.length; i++) {
        let comb = [prices[i], -1];
        for (let j = i + 1; j < prices.length; j++) {
            if (prices[j] > prices[i] && prices[j] > comb[1]) {
                comb = [prices[i], prices[j]];
            }
        }
        if ((comb[1] - comb[0]) > diff) diff = comb[1] - comb[0];
    }
    return diff
}