function findFirstRepeated(gifts) {
  const seen = Object.create(null);
  for (const gift of gifts) {
    if (seen[gift]) return gift;
    seen[gift] = true;
  }
  return -1;
}