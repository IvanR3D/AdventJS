/**
 * @param {string[][]} warehouse
 * @param {number[]} drops
 * @returns {string[][]}
 */
function dropGifts(warehouse, drops) {
  const wh = [...warehouse];
  const h = wh.length - 1;
  drops.forEach((drop) => {
    for (let i = h; i >= 0; i--) {
      if (wh[i][drop] === ".") {
        wh[i][drop] = "#";
        break;
      }
    }
  });
  return wh;
}