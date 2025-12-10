/**
 * @param {string} board - Represent the board situation
 * @param {string} moves - Movement direction
 * @returns {'fail' | 'crash' | 'success'}
 */
function moveReno(board, moves) {
  const grid = board.trim().split("\n");
  const DIR = {
    U: [0, -1],
    R: [1, 0],
    D: [0, 1],
    L: [-1, 0],
  };
  let pos = null;
  for (let y = 0; y < grid.length; y++) {
    const x = grid[y].indexOf("@");
    if (x !== -1) {
      pos = [x, y];
      break;
    }
  }
  for (const move of moves) {
    const [x, y] = DIR[move];
    const nx = pos[0] + x;
    const ny = pos[1] + y;
    if (nx < 0 || nx >= grid[0].length || ny < 0 || ny >= grid.length)
      return "crash";
    const cell = grid[ny][nx];
    if (cell === "#") return "crash";
    if (cell === "*") return "success";
    pos[0] = nx;
    pos[1] = ny;
  }
  return "fail";
}