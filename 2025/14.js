/**
 * @param {object} workshop - A representation of the workshop
 * @param {string|number|boolean} gift - The gift to find
 * @returns {number[]} The path to the gift
 */
function findGiftPath(workshop, gift) {
  for (const key in workshop) {
    const value = workshop[key];
    if (value === gift) return [key];
    if (typeof value === "object" && value !== "null") {
      const subPath = findGiftPath(value, gift);
      if (subPath.length > 0) {
        return [key, ...subPath];
      }
    }
  }
  return [];
}