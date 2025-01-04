/**
 * @param {number[]} reindeer
 * @param {number[]} stables
 * @returns {number}
 */
function minMovesToStables(reindeer, stables) {
    reindeer.sort()
    stables.sort()
    return reindeer.reduce((acc, pos, i) => {
        return acc + Math.abs(pos - stables[i])
    }, 0)
}