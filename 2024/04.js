function createXmasTree(height, ornament) {
    if (height === 0) return '';
    const size = (height * 2) - 1;
    const trunk = "_".repeat((size-1)/2)+"#"+"_".repeat((size-1)/2);
    const lines = [];
    for (let i = 1; i <= size; i+=2) {
      const padding = "_".repeat((size-i)/2);
      lines.push(`${padding}${ornament.repeat(i)}${padding}`);
    }
    lines.push(trunk, trunk);
    return lines.join('\n');
  }