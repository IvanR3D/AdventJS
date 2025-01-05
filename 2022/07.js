function getGiftsToRefill(a1, a2, a3) {
    const all = [...new Set([...a1, ...a2, ...a3])];
    return all.filter(el =>
        [a1, a2, a3].filter(arr => arr.includes(el)).length === 1);
}