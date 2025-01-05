function distributeGifts(packOfGifts, reindeers) {
    const weight = packOfGifts.reduce((acc, v) => acc + v.length, 0);
    const carry = reindeers.reduce((acc, r) => acc + r.length * 2, 0);
    return Math.floor(carry / weight);
}