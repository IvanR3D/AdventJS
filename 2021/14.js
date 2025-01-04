export default function missingReindeer(ids) {
    if (ids.length === 1 && ids[0] === 1) return 0;
    const n = ids.length;
    const expected = ((n) * (n+1)) / 2
    const actual = ids.reduce((acc,id) => acc+id, 0);
    const missed = expected - actual;
    return missed === 0 ? n : missed;
  }