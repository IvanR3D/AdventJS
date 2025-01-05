function createCube(size) {
    const upperpart = [];
    const lowerpart = [];
    for (let i = 1; i <= size; i++) {
        const spaces = ' '.repeat(size - i);
        const slashes = '/\\'.repeat(i);
        const underscores = '_\\'.repeat(size);
        upperpart.push(spaces + slashes + underscores);
    }
    for (let i = size; i > 0; i--) {
        const spaces = ' '.repeat(size - i);
        const backslashes = '\\/'.repeat(i);
        const underscores = '_/'.repeat(size);
        lowerpart.push(spaces + backslashes + underscores);
    }
    return upperpart.concat(lowerpart).join('\n');
}