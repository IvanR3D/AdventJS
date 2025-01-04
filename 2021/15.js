export default function checkSledJump(heights) {
    const len = heights.length;
    const half = Math.ceil(len / 2);
    for (let i = 1; i < half; i += 2) {
        const n1 = heights[i - 1];
        const n2 = heights[i];
        if (n2 - n1 <= 0) return false;
    }
    for (let i = half; i < heights.length; i += 2) {
        const n1 = heights[i - 1];
        const n2 = heights[i];
        if (n2 - n1 >= 0) return false;
    }
    return true;
}