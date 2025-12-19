/**
 * @param {string[][]} board
 * @returns {boolean}
 */
function hasFourInARow(board) {
  const h = board.length;
  if (h === 0) return false;
  const w = board[0].length;
  if (w === 0) return false;

  function checkSequence(x, y, dx, dy) {
    let count = 0;
    let prev = null;
    let i = x, j = y;
    while (i >= 0 && i < h && j >= 0 && j < w) {
      const cell = board[i][j];
      if (cell === "R" || cell === "G") {
        if (cell === prev) {
          count++;
          if (count === 4) return true;
        } else {
          count = 1;
          prev = cell;
        }
      } else {
        count = 0;
        prev = null;
      }
      i += dx;
      j += dy;
    }
    return false;
  }
  // Check horizontal
  for (let y = 0; y < h; y++) {
    if (checkSequence(y, 0, 0, 1)) return true;
  }
  // Check vertical
  for (let x = 0; x < w; x++) {
    if (checkSequence(0, x, 1, 0)) return true;
  }
  // Check diagonals (top-left)
  for (let y = 0; y < h; y++) {
    if (checkSequence(y, 0, 1, 1)) return true;
  }
  // Check diagonals (top-right)
  for (let y = 0; y < h; y++) {
    if (checkSequence(y, w - 1, 1, -1)) return true;
  }
  return false;
}