/**
 * @param {string[][]} routes - Array of [origin, destination] pairs
 * @returns {string[]} The reconstructed route
 */
function revealSantaRoute(routes) {
  const result = [];
  const map = new Map();
  routes.map((route) => map.set(route[0], route[1]));
  let elem = routes[0][0];
  result.push(elem);
  while (true) {
    const dest = map.get(elem);
    if (dest === undefined) return result;
    result.push(dest);
    elem = dest;
  }
}