/**
 * @param {{ hand: 'L' | 'R', color: string }[]} gloves
 * @returns {string[]} Colors of matched pairs
 */
function matchGloves(gloves) {
  const result = [];
  const pairs = {};
  for (const { hand, color } of gloves) {
    pairs[color] ??= { L: 0, R: 0 };
    pairs[color][hand]++;
  }
  for (const color in pairs) {
    const { L, R } = pairs[color];
    const num = Math.min(L, R);
    for (let i = 0; i < num; i++) {
      result.push(color);
    }
  }
  return result;
}
