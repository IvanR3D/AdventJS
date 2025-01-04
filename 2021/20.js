export default function pangram(letter) {
    const normalize = letter.toLowerCase();
    const text = new Set(normalize.match(/[\u00f1a-z]/g));
    return text.size === 27;
}