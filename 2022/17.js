function carryGifts(gifts, maxWeight) {
    const result = [];
    let box = '';
    for (let i = 0; i < gifts.length; i++) {
      if (box.replace(/\s+/g, "").length+gifts[i].length <= maxWeight) {
        box += ' '+gifts[i];
      } else {
        if (box.length > 0) {
          result.push(box.trim());
          box = ' '+gifts[i];
        }
      }
    }
    if (box.length > 0) result.push(box.trim());
    return result;
  }