/**
 * @param {Array<{ toy: string, quantity: number }>} giftsToProduce
 * @returns {string[]} Array of manufactured gifts
 */
function manufactureGifts(giftsToProduce) {
  const result = [];
  for(const {toy, quantity} of giftsToProduce) {
    if(Number.isFinite(quantity) && quantity > 0) {
      result.push(...Array(quantity).fill(toy));
    }
  }
  return result;
}