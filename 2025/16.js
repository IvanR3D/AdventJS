/**
 * @param {number[]} gifts - The gifts to pack
 * @param {number} maxWeight - The maximum weight of the sleigh
 * @returns {number | null} The number of sleighs needed
 * Return null if no sleigh can carry all the gifts
 */
function packGifts(gifts, maxWeight) {
  if (gifts.some((gift) => gift > maxWeight)) return null;
  let sleighs = 0;
  let sum = 0;
  for (let i = 0; i < gifts.length; i++) {
    const gift = gifts[i];
    sum += gift;
    if (sum >= maxWeight) {
      if (sum !== maxWeight) i--;
      sleighs++;
      sum = 0;
    }
  }
  if (sum > 0) sleighs++;
  return sleighs;
}