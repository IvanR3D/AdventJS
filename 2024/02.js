function createFrame(names) {
    const maxLength = names.reduce((max, str) => Math.max(max, str.length), 0);
    const border = '*'.repeat(maxLength + 4);
    const framedName = names.map(name => {
        return `* ${name.padEnd(maxLength, ' ')} *`;
    }).join('\n');
    return `${border}\n${framedName}\n${border}`;
}