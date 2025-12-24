/**
 * @param {string[][]} map - The town map.
 * @returns {number} - Minimum steps to deliver all gifts.
 */
function minStepsToDeliver(map) {
  const H = map.length;
  const W = map[0].length;
  let Gs = 0;
  let sx = 0,
    sy = 0;
  let reachedGs = 0;
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      if (map[y][x] === "S") {
        sx = x;
        sy = y;
      } else if (map[y][x] === "G") {
        Gs++;
      }
    }
  }
  if (Gs === 0) return 0;
  const MOVES = [
    [0, -1],
    [1, 0],
    [0, 1],
    [-1, 0],
  ];
  const visited = new Set();
  visited.add(`${sx},${sy}`);
  const queue = [[sx, sy, 0]];
  let result = 0;
  while (queue.length > 0) {
    const [x, y, d] = queue.shift();
    if (map[y][x] === "G") {
      result += d;
      reachedGs++;
    }
    for (const [dx, dy] of MOVES) {
      const nx = x + dx;
      const ny = y + dy;
      const key = `${nx},${ny}`;
      if (
        nx >= 0 &&
        nx < W &&
        ny >= 0 &&
        ny < H &&
        map[ny][nx] !== "#" &&
        !visited.has(key)
      ) {
        visited.add(key);
        queue.push([nx, ny, d + 1]);
      }
    }
  }
  return reachedGs === Gs ? result : -1;
}