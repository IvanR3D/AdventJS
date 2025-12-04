/**
 * @param {number} size - The size of the gift
 * @param {string} symbol - The symbol to draw
 * @returns {string} The gift drawn
 */
function drawGift(size, symbol) {
  if (size < 2) return "";
  const border = symbol.repeat(size);
  const inner = symbol + " ".repeat(size - 2) + symbol;
  const middle = Array(size - 2).fill(inner);
  return [border, ...middle, border].join("\n");
}