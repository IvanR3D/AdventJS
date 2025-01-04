export default function createXmasTree(height) {
    const base = `${'_'.repeat(height - 1)}#${'_'.repeat(height - 1)}\n${'_'.repeat(height - 1)}#${'_'.repeat(height - 1)}`;
    let counter = 1;
    let tree = '';
    for (let i = height - 1; i >= 0; i--) {
        tree += `${'_'.repeat(i)}${'*'.repeat(counter)}${'_'.repeat(i)}\n`;
        counter += 2;
    }
    return `${tree}${base}`;
}