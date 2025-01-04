function findInAgenda(agenda, phone) {
    let match = null;
    for (const line of agenda.split('\n')) {
        const phoneMatch = line.match(/\+\d{1,2}-\d{3}-\d{3}-\d{3}/);
        const nameMatch = line.match(/<([^>]+)>/);
        if (!phoneMatch) continue;
        const phoneExtracted = phoneMatch[0];
        if (!phoneExtracted.includes(phone)) continue;
        const name = nameMatch ? nameMatch[1] : '';
        const address = line
            .replace(phoneExtracted, '')
            .replace(/<[^>]+>/, '')
            .trim();
        if (match) return null;
        match = { name, address };
    }
    return match;
}
