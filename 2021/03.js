export default function isValid(letter) {
    const oc = letter.split('(').length - 1;
    const cc = letter.split(')').length - 1
    const matches = letter.match(/\(([a-zA-Z0-9ñÑáéíóúÁÉÍÓÚüÜ]+)\)/gu)?.map(match => match.slice(1, -1)) || [];
    let valid = false;
    if (oc === cc && matches.length > 0) {
        matches.forEach(match => {
            if (match.length > 0 && !match.includes('[') && !match.includes('{')) {
                valid = true;
            } else { valid = false; }
        });
    } else { valid = false; }
    return valid;
}