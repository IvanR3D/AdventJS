function howManyReindeers(reindeerTypes, gifts) {
  const sorted = [...reindeerTypes].sort(
    (a, b) => a.weightCapacity - b.weightCapacity
  );

  return gifts.map((gift) => {
    const result = [];
    let remaining = gift.weight;
    const reindeers = {};
    while (remaining > 0) {
      for (const { weightCapacity, type } of sorted) {
        const capacity = remaining - weightCapacity;
        if (capacity >= 0) {
          remaining = capacity;
          reindeers[type] = reindeers[type] || 0;
          reindeers[type]++;
        }
      }
    }

    Object.entries(reindeers).forEach((reindeer) => {
      result.push({
        type: reindeer[0],
        num: reindeer[1],
      });
    });

    return {
      country: gift.country,
      reindeers: result.reverse(),
    };
  });
}
