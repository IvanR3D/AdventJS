export default function canReconfigure(from, to) {
    const t = new Map();
    if (from.length !== to.length) return false;
    for (let i = 0; i < from.length; i++) {
        if (!t.has(from[i]) && !t.has(to[i])) {
            t.set(from[i], to[i]);
            t.set(to[i], from[i]);
        } else {
            if (t.get(from[i]) !== to[i]) return false;
        }
    }
    return true;
}