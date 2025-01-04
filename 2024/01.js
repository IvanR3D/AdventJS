function prepareGifts(gifts) {
    const set = new Set(gifts);
    return Array.from(set).sort((a, b) => a - b);
}