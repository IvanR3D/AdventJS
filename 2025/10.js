/**
 * @param {string} s - The string to check
 * @returns {number} The maximum depth of the magic
 */
function maxDepth(s) {
  let depth = 0;
  let maxDepth = 0;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c === "[") {
      depth++;
      maxDepth = Math.max(maxDepth, depth);
    } else if (c === "]") depth--;
    if (depth < 0) return -1;
  }
  return depth === 0 ? maxDepth : -1;
}
