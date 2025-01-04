/** @param {string} packages with parentheses
 *  @returns {string} Fixed and sorted packages
 */
function fixPackages(packages) {
    const stack = [];
    let result = '';
    for (let char of packages) {
        if (char === '(') {
            stack.push(result);
            result = '';
        } else if (char === ')') {
            result = stack.pop() + result.split('').reverse().join('');
        } else {
            result += char;
        }
    }
    return result;
}
