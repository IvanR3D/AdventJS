/**
 * @param {string[]} board - Represent the train situation
 * @param {'U' | 'D' | 'R' | 'L' } mov - Movement direction
 * @returns {'none' | 'crash' | 'eat'}
 */
function moveTrain(board, mov) {
    const moves = { "U": [0, -1], "R": [1, 0], "D": [0, 1], "L": [-1, 0] };
    const items = { undefined: 'crash', "o": 'crash', "*": 'eat', "·": 'none' };
    for (let y = 0; y < board.length; y++) {
      const x = board[y].indexOf("@");
      if (x !== -1) return items[board[y+moves[mov][1]]?.[x+moves[mov][0]]];
    }
  }