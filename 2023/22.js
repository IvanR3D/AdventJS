function compile(code) {
  let counter = 0;
  let prev = -1;
  let cond = false;
  for (let i = 0; i < code.length; i++) {
    const ins = code[i];
    if (ins === "+") counter++;
    else if (ins === "*") counter *= 2;
    else if (ins === "-") counter--;
    else if (ins === "%") prev = i;
    else if (ins === "<") {
      if (prev !== -1 && !cond) {
        i = prev;
        cond = true;
      }
    } else if (ins === "¿") {
      if (counter < 1) {
        i = code.indexOf("?", i);
      }
    }
  }
  return counter;
}