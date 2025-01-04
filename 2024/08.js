/**
 * @param {number[]} indices - The reno indices
 * @param {number} length - The length of the race
 * @returns {string} The reno race
 */
function drawRace(indices, length) {
    // Pre-calculate common strings to avoid repeated operations
    const tilde = '~'.repeat(length);
    return indices.map((index, i) => {
      const spaces = ' '.repeat(indices.length - i - 1);
      const suffix = ` /${i + 1}`;
      if (index === 0) return spaces + tilde + suffix;
      if (index > 0) {
        const beforeR = '~'.repeat(index);
        const afterR = '~'.repeat(length - (index + 1));
        return spaces + beforeR + 'r' + afterR + suffix;
      }
      const h = length + index;
      const beforeR = '~'.repeat(h);
      const afterR = '~'.repeat(length - h - 1);
      return spaces + beforeR + 'r' + afterR + suffix;
    }).join('\n');
  }