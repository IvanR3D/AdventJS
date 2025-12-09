/**
 * @param {string} toy - The toy to find the first unique one letter
 * @returns {string} The first unique letter in the toy
 */
function findUniqueToy(toy) {
  const lowcase = toy.toLowerCase();
  const count = {};
  for (const c of lowcase) {
    count[c] = (count[c] || 0) + 1;
  }
  for (let i = 0; i < toy.length; i++) {
    if (count[lowcase[i]] === 1) return toy[i];
  }
  return "";
}