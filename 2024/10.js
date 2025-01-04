function compile(instructions) {
    const register = {};
    const actions = {
        MOV: (x, y) => {
            register[y] = isNaN(x) ? Number(register[x]) : Number(x);
            ++i;
        },
        INC: (x) => {
            register[x] = ~~register[x] + 1;
            ++i;
        },
        DEC: (x) => {
            register[x] = ~~register[x] - 1;
            ++i;
        },
        JMP: (x, y) => {
            ~~register[x] == 0 ? i = y : ++i;
        }
    };
    let i = 0;
    while (i < instructions.length) {
        let [action, a1, a2 = 0] = instructions[i].split(' ');
        actions[action](a1, a2);
    }
    return register['A'];
}