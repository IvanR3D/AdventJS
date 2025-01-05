function checkPart(part) {
    let reversed = part.split('').reverse().join('');
    if (part === reversed) return true;
    for (let i = 0; i < part.length; i++) {
        const newPart = part.slice(0, i) + part.slice(i + 1);
        reversed = newPart.split('').reverse().join('');
        if (newPart === reversed) return true;
    }
    return false;
}