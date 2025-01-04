export default function canCarry(capacity, trip) {
    let q = capacity;
    const points = {};
    trip.forEach(([g, pa, pb]) => {
        if (points[pa] === undefined) { points[pa] = -g; } 
        else { points[pa] += -g; }
        if (points[pb] === undefined) { points[pb] = +g; } 
        else { points[pb] += +g; }
    });
    for (const key in points) {
        q += points[key];
        if (q < 0) return false;
    }
    return true;
}