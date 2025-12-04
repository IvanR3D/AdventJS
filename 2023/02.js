function manufacture(gifts, materials) {
  return gifts.filter((gift) => {
    for (let i = 0; i < gift.length; i++) {
      const g = gift[i];
      if (!materials.includes(g)) {
        return false;
      }
    }
    return true;
  });
}