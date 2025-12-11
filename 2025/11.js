/**
 * @param {string[]} warehouse - The warehouse layout
 * @returns {number} The count of unwatched gifts
 */
function findUnsafeGifts(warehouse) {
  const DIR = [
    [0, -1],
    [1, 0],
    [0, 1],
    [-1, 0],
  ];
  const H = warehouse.length;
  const W = warehouse[0].length;
  let presents = 0;
  for (let i = 0; i < H; i++) {
    for (let j = 0; j < W; j++) {
      const pos = warehouse[i][j];
      if (pos === "*") {
        let count = 0;
        for (const [x, y] of DIR) {
          const nx = j + x;
          const ny = i + y;
          if (nx >= 0 && nx < W && ny >= 0 && ny < H) {
            if (warehouse[ny][nx] === "#") count++;
          }
        }
        if (count === 0) presents++;
      }
    }
  }
  return presents;
}