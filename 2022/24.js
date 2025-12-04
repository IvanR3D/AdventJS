function canExit(maze) {
  let start = null;
  for (let y = 0; y < maze.length; y++) {
    if (maze[y].includes("S")) {
      start = [y, maze[y].indexOf("S")];
      break;
    }
  }
  const q = [start];
  const v = new Set(`${start[0]}-${start[1]}`);

  while (q.length > 0) {
    const [cy, cx] = q.shift();
    if (maze[cy][cx] === "E") return true;
    for (const [y, x] of [
      [0, -1],
      [0, 1],
      [1, 0],
      [-1, 0],
    ]) {
      const ny = cy + y;
      const nx = cx + x;
      if (
        maze[ny] === undefined ||
        maze[ny][nx] === undefined ||
        maze[ny][nx] === "W"
      ) {
        continue;
      } else {
        if (!v.has(`${ny}-${nx}`)) {
          q.push([ny, nx]);
          v.add(`${ny}-${nx}`);
        }
      }
    }
  }
  return false;
}
