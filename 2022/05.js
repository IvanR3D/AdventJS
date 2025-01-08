function getMaxGifts(giftsCities, maxGifts, maxCities) {
  
    function generateCombs(arr, maxLength) {
      const combinations = [];
      function backtrack(start, currentComb) {
        if (currentComb.length > 0 && currentComb.length <= maxLength) 
            combinations.push([...currentComb]);
        if (currentComb.length >= maxLength) return;
        for (let i = start; i < arr.length; i++) {
          currentComb.push(arr[i]);
          backtrack(i+1, currentComb);
          currentComb.pop();
        }
      }
      backtrack(0, []);
      return combinations;
    }
  
    const combinations = generateCombs(giftsCities, maxCities);
    let maxValidSum = 0;
  
    for (const comb of combinations) {
      const sum = comb.reduce((acc, curr) => acc + curr, 0);
      if (sum <= maxGifts && sum > maxValidSum) maxValidSum = sum;
    }
  
    return  maxValidSum;
  }