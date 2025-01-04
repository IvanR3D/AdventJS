/**
 * @param {string} code - The magical program to execute
 * @returns {number} - The final value after executing the program
 */
function execute(code) {
    let result = 0;
    let loop = 0;
    for (let i = 0; i < code.length; i++) {
        const ins = code[i];
        if (ins === '>') { continue; }
        else if (ins === '+') {
            result++;
        } else if (ins === '-') {
            result--;
        } else if (ins === '[') {
            loop = i;
            if (result === 0) i = code.indexOf(']', i);
        } else if (ins === ']') {
            if (result !== 0) i = loop;
        } else if (ins === '{') {
            if (result === 0) i = code.indexOf('}', i);
        } else if (ins === '}') continue;
    }
    return result;
}
