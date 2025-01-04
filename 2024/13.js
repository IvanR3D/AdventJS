/** @param {string[]} moves
 * @returns {true|string[]} Return true if robot returns or position
 */
function isRobotBack(moves) {
    const DIR = { "U": [0, 1], "R": [1, 0], "D": [0, -1], "L": [-1, 0] };
    let cpos = [0, 0];
    let state = "";
    const prev = [];
    for (let i = 0; i < moves.length; i++) {
        let move = moves[i];
        if (Object.keys(DIR).includes(move)) {
            if (state === "*") {
                cpos[0] += DIR[move][0] + DIR[move][0];
                cpos[1] += DIR[move][1] + DIR[move][1];
                state = "";
            } else if (state === "!") {
                if (move === "U") move = "D"
                else if (move === "D") move = "U"
                else if (move === "R") move = "L"
                else if (move === "L") move = "R"
                cpos[0] += DIR[move][0];
                cpos[1] += DIR[move][1];
                state = "";
            } else if (state === "?") {
                if (!prev.includes(move)) {
                    cpos[0] += DIR[move][0];
                    cpos[1] += DIR[move][1];
                }
                state = "";
            } else {
                cpos[0] += DIR[move][0];
                cpos[1] += DIR[move][1];
            }
            prev.push(move);
        } else { state = move; }
    }
    if (cpos[0] === 0 && cpos[1] === 0) return true;
    return cpos;
}