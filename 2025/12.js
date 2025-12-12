/**
 * @param {string} elf1 - The moves of the first elf
 * @param {string} elf2 - The moves of the second elf
 * @return {number} - The result of the battle
 */
function elfBattle(elf1, elf2) {
  const len = elf1.length;
  const damage = { A: 1, F: 2, B: 0 };
  let hp1 = 3,
    hp2 = 3;
  for (let i = 0; i < len; i++) {
    let m1 = elf1[i],
      m2 = elf2[i];
    const elf1Attacks = !(m2 === "B" && m1 === "A");
    const elf2Attacks = !(m1 === "B" && m2 === "A");
    hp1 -= elf2Attacks ? damage[m2] : 0;
    hp2 -= elf1Attacks ? damage[m1] : 0;
    if (hp1 <= 0 || hp2 <= 0) break;
  }
  return hp1 === hp2 ? 0 : hp1 > hp2 ? 1 : 2;
}