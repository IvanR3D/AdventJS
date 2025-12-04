function adjustLights(lights) {
  let changes1 = 0;
  let changes2 = 0;

  for (let i = 0; i < lights.length; i++) {
    const pattern1 = i % 2 === 0 ? "🟢" : "🔴";
    const pattern2 = i % 2 === 0 ? "🔴" : "🟢";
    if (pattern1 !== lights[i]) changes1++;
    if (pattern2 !== lights[i]) changes2++;
  }
  return Math.min(changes1, changes2);
}