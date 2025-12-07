/** @param {number} height - Height of the tree
 *  @param {string} ornament - Character to use as ornament
 *  @param {number} frequency - How often ornaments appear
 *  @returns {string} The decorated tree
 */
function drawTree(height, ornament, frequency) {
  let pos = 1;
  const tree = [];
  for (let h = 1; h <= height; h++) {
    const orn = 2 * h - 1;
    const spaces = height - h;
    let row = " ".repeat(spaces);
    for (let i = 0; i < orn; i++) {
      row += pos % frequency === 0 ? ornament : "*";
      pos++;
    }
    tree.push(row);
  }
  tree.push(" ".repeat(height - 1) + "#");
  return tree.join("\n");
}