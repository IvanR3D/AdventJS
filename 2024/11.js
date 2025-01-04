/**
 * @param {string} filename - The filename to decode.
 * @returns {string} The decoded filename.
 */
function decodeFilename(filename) {
    const fu = filename.indexOf('_');
    const end = filename.lastIndexOf('.');
    return filename.slice(fu + 1, end);
}