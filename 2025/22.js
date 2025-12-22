/**
 * @param {string[][]} maze
 * @returns {boolean}
 */
function canEscape(maze) {
    const height = maze.length;
    const width = maze[0].length;
    const MOVES = [[0,-1],[1,0],[0,1],[-1,0]];
    const visited = new Set(`0-0`);
    const queue = [[0,0]];
    while(queue.length > 0) {
      const cur = queue.shift();
      if(maze[cur[1]][cur[0]] === 'E') return true;
      for(const [x,y] of MOVES) {
        const nx = cur[0] + x;
        const ny = cur[1] + y;
        if(nx >= 0 && nx < width
        && ny >= 0 && ny < height
        && maze[ny][nx] !== '#') {
          if (!visited.has(`${nx}-${ny}`)) {
            visited.add(`${nx}-${ny}`);
            queue.push([nx,ny]);
          }
        }
      }
    }
    return false;
}