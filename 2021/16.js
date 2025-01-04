export default function decodeNumber(symbols) {
    const s = {
        '.': 1,
        ',': 5,
        ':': 10,
        ';': 50,
        '!': 100
    };
    let len = symbols.length;
    let result = 0;
    for (let i = 0; i < len; i++) {
        const value = s[symbols[i]];
        value < s[symbols[i + 1]] ? result -= value : result += value;
    }
    return result;
}