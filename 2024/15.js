/**
 * @param {Array<Object>} data
 * @returns {string}
 */
function drawTable(data) {
    const capitalize = (string) => {
        return string[0].toUpperCase() + string.slice(1);
    };
    const colLengths = {};
    for (let i = 0; i < data.length; i++) {
        const keys = Object.keys(data[i]);
        const values = Object.values(data[i]);
        keys.forEach((key, index) => {
            const value = values[index].toString();
            colLengths[key] = Math.max(colLengths[key] || 0, key.length, value.length);
        });
    }

    const border = `+${Object.keys(colLengths).map((key) => '-'.repeat(colLengths[key] + 2)).join('+')}+`;
    const header = `|${Object.keys(colLengths).map((key) => ` ${capitalize(key).padEnd(colLengths[key], ' ')} `).join('|')}|`;
    let rows = '';
    for (let i = 0; i < data.length; i++) {
        const row = `|${Object.keys(data[i]).map((key) => ` ${data[i][key].toString().padEnd(colLengths[key], ' ')} `).join('|')}|`;
        rows += `${row}\n`;
    }
    return `${border}\n${header}\n${border}\n${rows}${border}`;
}