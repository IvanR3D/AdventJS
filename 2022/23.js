function executeCommands(commands) {
  const output = new Array(8).fill(0);
  let i = 0;
  while (i < commands.length) {
    const [ins, reg] = commands[i].split(" ");
    switch (ins) {
      case "MOV": {
        const [p1, p2] = reg.split(",");
        isNaN(p1)
          ? (output[Number(p2.slice(-1))] = output[Number(p1.slice(-1))])
          : (output[Number(p2.slice(-1))] = Number(p1));
        break;
      }
      case "ADD": {
        const [p1, p2] = reg.split(",");
        output[Number(p1.slice(-1))] += output[Number(p2.slice(-1))];
        break;
      }
      case "DEC":
        output[Number(reg.slice(-1))] -= 1;
        break;
      case "INC":
        output[Number(reg.slice(-1))] += 1;
        break;
      case "JMP":
        if (output[0] !== 0) {
          i = Number(reg);
          continue;
        }
        break;
    }
    i++;
  }
  return output.map((v) => (v + 256) % 256);
}
