function getOptimalPath(path) {
    const MOVES = [[0, 1], [1, 1]];
    const q = [{ x: 0, y: 0, g: path[0][0] }];
    let min = Infinity;
    while (q.length > 0) {
        const el = q.shift();
        if (el.y === path.length - 1 && el.g < min) min = el.g;
        for (const [x, y] of MOVES) {
            const nx = el.x + x;
            const ny = el.y + y;
            if (path[ny] === undefined || path[ny][nx] === undefined) continue;
            q.push({ x: nx, y: ny, g: el.g + path[ny][nx] });
        }
    }
    return min;
}