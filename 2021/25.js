export default function canMouseEat(direction, game) {
    const rows = game.length;
    const cols = game[0].length;
    const dirs = {
        "up": [0, -1],
        "down": [0, 1],
        "right": [1, 0],
        "left": [-1, 0]
    };
    const midurat = { x: 0, y: 0 };
    outer: for (let i = 0; i < rows; i++) {
        if (game[i].includes("m")) {
            for (let j = 0; j < cols; j++) {
                if (game[i][j] === "m") {
                    midurat.x = j;
                    midurat.y = i;
                    break outer;
                }
            }
        }
    }
    const move = dirs[direction];
    const x = midurat.x + move[0];
    const y = midurat.y + move[1];
    return game[y]?.[x] === "*";
}