function decode(message) {
  while (message.includes("(")) {
    const open = message.lastIndexOf("(");
    let close;
    for (let i = open; i < message.length; i++) {
      if (message[i] === ")") {
        close = i;
        break;
      }
    }
    message = message.replace(
      message.substring(open, close + 1),
      message
        .substring(open + 1, close)
        .split("")
        .reverse()
        .join("")
    );
  }
  return message;
}