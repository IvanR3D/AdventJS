function inBox(box) {
    for (let i = 1; i < box.length - 1; i++) {
        for (let j = 1; j < box[0].length - 1; j++) {
            if (box[i][j] === "*") return true;
        }
    }
    return false
}