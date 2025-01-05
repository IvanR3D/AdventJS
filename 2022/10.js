function checkJump(heights) {
    const peakIndex = heights.indexOf(Math.max(...heights))
    for (let i = 0; i < peakIndex; i++) {
        if (heights[i] > heights[i + 1]) return false
    }
    for (let i = peakIndex; i < heights.length - 1; i++) {
        if (heights[i] < heights[i + 1]) return false
    }
    return heights[0] < heights[peakIndex] &&
        heights[peakIndex] > heights[heights.length - 1]
}