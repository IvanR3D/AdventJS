/**
 * @param {string[][]} board
 * @returns {boolean}
 */
function hasFourLights(board) {
  const h = board.length;
  if (h === 0) return false;
  const w = board[0].length;
  if (w === 0) return false;
  for (const line of board) {
    let count = 0;
    let prev = null;
    for (const cell of line) {
      if (cell === prev) {
        count++;
      } else {
        count = cell === "R" || cell === "G" ? 1 : 0;
      }
      if (count === 4) return true;
      prev = cell;
    }
  }
  for (let y = 0; y < w; y++) {
    let count = 0;
    let prev = null;
    for (let x = 0; x < h; x++) {
      const cell = board[x][y];
      if (cell === prev) {
        count++;
      } else {
        count = cell === "R" || cell === "G" ? 1 : 0;
      }
      if (count === 4) return true;
      prev = cell;
    }
  }
  return false;
}