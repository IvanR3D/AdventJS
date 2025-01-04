/**
 * @param {number} weight - Total weight of the gifts
 * @returns {string} - Stacked boxes represented as ASCII art
 */
function distributeWeight(weight) {
    const boxes = {
        1: [" _ ", "|_|"],
        2: [" ___ ", "|___|"],
        5: [" _____ ", "|     |", "|_____|"],
        10: [" _________ ", "|         |", "|_________|"]
    };
    const distribution = [];
    const weights = [10, 5, 2, 1];
    let remaining = weight;
    for (const w of weights) {
        while (remaining >= w) {
            distribution.push(w);
            remaining -= w;
        }
    }
    const result = [];
    distribution.sort((a, b) => a - b);
    result.push(boxes[distribution[0]][0]);
    for (let i = 0; i < distribution.length; i++) {
        const currentBox = boxes[distribution[i]];
        const nextBox = distribution[i + 1] ? boxes[distribution[i + 1]] : null;
        const currentWidth = currentBox[currentBox.length - 1].length - 2;
        const nextWidth = nextBox ? nextBox[nextBox.length - 1].length - 2 : 0;
        const padding = Math.max(0, nextWidth - currentWidth - 1);
        for (let j = 1; j < currentBox.length - 1; j++) {
            result.push(currentBox[j]);
        }
        result.push(currentBox[currentBox.length - 1] + '_'.repeat(padding));
    }
    return result.join('\n');
}