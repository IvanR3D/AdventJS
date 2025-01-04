export default function getCoins(change) {
    const coins = [50, 20, 10, 5, 2, 1];
    const result = Array(6).fill(0);
    let i = 0;
    while (i < 6) {
        if (change - coins[i] >= 0) {
            change -= coins[i];
            result[i] += 1;
            i = 0;
        } else { i++; }
    }
    return result.reverse();
}