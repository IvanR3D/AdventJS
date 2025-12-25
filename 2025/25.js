/**
 * @param {string} code - The magical program to execute
 * @returns {number} - The final value after executing the program
 */
function execute(code) {
    const jumpMap = new Map();
    const stack = [];
    for (let i = 0; i < code.length; i++) {
        const char = code[i];
        if (char === '[' || char === '{') {
            stack.push({ char, index: i });
        } else if (char === ']' || char === '}') {
            const opening = stack.pop();
            jumpMap.set(opening.index, i);
            jumpMap.set(i, opening.index);
        }
    }
    let result = 0;
    const handlers = {
        '[': (i) => (result === 0 ? jumpMap.get(i) : i),
        '{': (i) => (result === 0 ? jumpMap.get(i) : i),
        ']': (i) => (result !== 0 ? jumpMap.get(i) : i),
        '+': (i) => { result++; return i; },
        '-': (i) => { result--; return i; }
    };

    for (let i = 0; i < code.length; i++) {
        const handler = handlers[code[i]];
        if (handler) { i = handler(i); }
    }
    return result;
}