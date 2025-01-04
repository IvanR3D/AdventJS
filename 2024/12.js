/** @param {string} ornaments
 * @return {number} - The price of the tree
 */
function calculatePrice(ornaments) {
    const prices = { '*': 1, 'o': 5, '^': 10, '#': 50, '@': 100 };
    let result = 0;
    for (let i = ornaments.length - 1; i >= 0; i--) {
        const c = prices[ornaments[i]];
        const n = prices[ornaments[i + 1]];
        if (!c) return undefined;
        result += n > c ? -c : c;
    }
    return result;
}