export default function getMinJump(obstacles) {
    obstacles.sort();
    const l = obstacles.length;
    let fall = false;
    let jump = 1;
    let pos = 0;
    while (pos < obstacles[l - 1]) {
        for (let i = 0; i < obstacles[l - 1]; i++) {
            if (obstacles.includes(pos)) {
                fall = true;
                pos = 0;
                break;
            } else { pos += jump; }
        }
        if (fall) { jump++; fall = false; }
        else { return jump; }
    }
    return jump;
}