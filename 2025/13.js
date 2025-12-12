/**
 * @param {string[]} factory - The factory layout
 * @returns {'completed'|'broken'|'loop'} Result of the gift journey
 */
function runFactory(factory) {
  const H = factory.length;
  const W = factory[0].length;
  const M = {
    "^": [0, -1],
    ">": [1, 0],
    v: [0, 1],
    "<": [-1, 0],
  };
  const seen = new Set();
  let x = 0,
    y = 0;
  while (true) {
    const key = `${x},${y}`;
    if (seen.has(key)) return "loop";
    seen.add(key);
    const cell = factory[y][x];
    if (cell === ".") return "completed";

    const dir = M[cell];
    const nx = x + dir[0];
    const ny = y + dir[1];
    if (nx < 0 || nx >= W || ny < 0 || ny >= H) return "broken";
    x = nx;
    y = ny;
  }
}