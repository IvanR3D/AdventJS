/**
 * @param {string} code - The code to decipher
 * @returns {string} The deciphered PIN
 */
function decodeSantaPin(code) {
  const blocks = [...code.matchAll(/\[(.*?)\]/g)].map((b) => b[1]);
  let pass = "";
  for (const block of blocks) {
    if (block === "<") pass += pass.at(-1) ?? "";
    else if (isNaN(block)) {
      let n = 0;
      for (let i = 0; i < block.length; i++) {
        const char = block[i];
        if (!isNaN(char)) n = Number(char);
        else if (char === "+") n++;
        else if (char === "-") n--;
      }
      pass += ((n % 10) + 10) % 10;
    } else pass += ((Number(block) % 10) + 10) % 10;
  }
  return pass.length > 3 ? pass : null;
}