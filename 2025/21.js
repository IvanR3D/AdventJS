/**
 * @param {string[][]} warehouse
 * @param {number[]} drops
 * @returns {string[][]}
 */
function clearGifts(warehouse, drops) {
  let wh = [...warehouse];
  const w = wh[0].length;
  drops.forEach((drop) => {
    for (let i = wh.length - 1; i >= 0; i--) {
      if (wh[i][drop] === ".") {
        wh[i][drop] = "#";
        if (!wh[i].includes(".")) {
          wh.splice(i, 1);
          wh.unshift(Array(w).fill("."));
        }
        break;
      }
    }
  });
  return wh;
}