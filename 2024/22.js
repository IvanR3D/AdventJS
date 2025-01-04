/**
 * @param {string[]} gifts - List of unique gifts.
 * @returns {string[][]} - All possible combinations of gifts, sorted by length.
 */
function generateGiftSets(gifts) {
    const combinations = [];
    // Helper function to generate combinations of specific length
    function generateCombinationsOfLength(start, currentCombination, length) {
        if (currentCombination.length === length) {
            combinations.push([...currentCombination]);
            return;
        }
        for (let i = start; i < gifts.length; i++) {
            currentCombination.push(gifts[i]);
            generateCombinationsOfLength(i + 1, currentCombination, length);
            currentCombination.pop();
        }
    }
    for (let length = 1; length <= gifts.length; length++) {
        generateCombinationsOfLength(0, [], length);
    }
    return combinations;
}
