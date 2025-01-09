function fixLetter(letter) {
    letter = letter.trim().split('');
    letter[0] = letter[0].toUpperCase();
    if (letter[letter.length - 1] !== '.'
        && letter[letter.length - 1] !== '?'
        && letter[letter.length - 1] !== '!') {
        letter.push('.');
    }
    const normalized = [];
    let cap = false;
    for (let i = 0; i < letter.length; i++) {
        let char = letter[i];
        const isLetter = char.match(/[a-z]/i);
        if (char === '.' || char === '?' || char === '!') {
            cap = true;
        }
        if (cap && isLetter) {
            char = char.toUpperCase();
            cap = false;
        }
        if (!isLetter && char === letter[i + 1]) continue;
        normalized.push(char);
    }
    let result = normalized.join('');
    if (result.includes('santa')) result = result.replaceAll('santa', 'Santa');
    if (result.includes('claus')) result = result.replaceAll('claus', 'Claus');
    result = result.replace(/\s*,\s*/g, ", ")
        .replace(/\s*\.\s*/g, ". ")
        .replace(/\s*\?\s*/g, "? ")
    return result.trim();
}