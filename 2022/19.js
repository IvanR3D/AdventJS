function sortToys(toys, positions) {
    const result = new Array(Math.max(...positions)).fill(null);
    const len = toys.length;
    for (let i = 0; i < len; i++) {
        const toy = toys[i];
        const pos = positions[i];
        result.splice(pos, 1, toy);
    }
    return result.filter(v => v !== null);
}