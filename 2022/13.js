function getFilesToBackup(lastBackup, changes) {
    const result = [];
    for (const [id, timestamp] of changes) {
        if (!result.includes(id) && timestamp > lastBackup)
            result.push(id);
    }
    return result.sort((a, b) => a - b);
}