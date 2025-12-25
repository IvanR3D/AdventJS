function execute(code) {
  let value = 0;
  let ip = 0;
  const matches = {};
  const stack = [];
  const len = code.length; // Cache length

  // Preprocessing loop
  for (let i = 0; i < len; i++) {
    const char = code[i];
    if (char === "[" || char === "{") {
      stack.push(i);
    } else if (char === "]" || char === "}") {
      const start = stack.pop();
      matches[start] = i;
      matches[i] = start;
    }
  }

  // Execution loop - optimized
  while (ip < len) {
    const char = code[ip];
    if (char === "+") {
      value++;
    } else if (char === "-") {
      value--;
    } else if (char === "[" || char === "{") {
      if (value === 0) {
        ip = matches[ip];
      }
    } else if (char === "]") {
      if (value !== 0) {
        ip = matches[ip];
      }
    }
    ip++;
  }

  return value;
}