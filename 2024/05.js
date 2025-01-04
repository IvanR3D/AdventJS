function organizeShoes(shoes) {
    const pairs = new Map()
    for (const { type, size } of shoes) {
        const pair = pairs.get(size) || { R: 0, I: 0 }
        pair[type]++
        pairs.set(size, pair)
    }

    const result = []
    for (const [size, count] of pairs) {
        const pairCount = Math.min(count.R, count.I)
        if (pairCount > 0) {
            result.push(...new Array(pairCount).fill(Number(size)))
        }
    }
    return result
}