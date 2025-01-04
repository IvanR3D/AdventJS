export default function fixFiles(files) {
    const seen = new Map();
    const result = [];
    files.forEach(file => {
        if (seen.has(file)) {
            seen.set(file, seen.get(file) + 1);
            result.push(`${file}(${seen.get(file)})`);
        } else {
            seen.set(file, 0);
            result.push(file);
        }
    });
    return result;
}