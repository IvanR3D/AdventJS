/**
 * @param {boolean[][]} grid
 * @returns {number[][]}
 */
function detectBombs(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    const DIRS = [
        [-1, 0], [1, 0], [0, -1], [0, 1],
        [-1, -1], [-1, 1], [1, -1], [1, 1]
    ];
    const result = Array.from({ length: rows }, () => Array(cols).fill(0));
    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
            let count = 0;
            for (const [dx, dy] of DIRS) {
                const nx = x + dx;
                const ny = y + dy;
                if (nx >= 0 && nx < cols && ny >= 0 && ny < rows && grid[ny][nx]) { count++; }
            }
            result[y][x] = count;
        }
    }
    return result;
}
