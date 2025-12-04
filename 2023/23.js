function organizeChristmasDinner(dishes) {
  const ingredients = {};
  for (let i = 0; i < dishes.length; i++) {
    const arr = dishes[i];
    for (let j = 1; j < arr.length; j++) {
      ingredients[arr[j]] ??= [];
      ingredients[arr[j]].push(arr[0]);
    }
  }
  const result = [];
  for (const [name, value] of Object.entries(ingredients)) {
    if (value.length > 1) {
      const r = [];
      r.push(name);
      value.sort();
      for (const val of value) {
        r.push(val);
      }
      result.push(r);
    }
  }
  result.sort();
  return result;
}