function decorateTree(base) {
    if (base.length <= 3) return [base.split(' ')[0], base];
    const baseArr = base.split(' ');
    const treeHeight = baseArr.length;
    const result = [base];
    const rules = {
        'BP': 'R', 'PB': 'R',
        'BR': 'P', 'RB': 'P',
        'PR': 'B', 'RP': 'B',
        'BB': 'B',
        'PP': 'P',
        'RR': 'R'
    };
    let row = baseArr;

    for (let i = 1; i < treeHeight; i++) {
        const nextRow = [];
        for (let j = 0; j < row.length; j++) {
            const pair = row[j] + row[j + 1];
            nextRow.push(rules[pair]);
        }
        result.unshift(nextRow.join(' ').trim());
        row = nextRow;
    }

    return result;
}