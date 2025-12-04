function checkStepNumbers(systemNames, stepNumbers) {
  const systems = Object.create(null);
  const len = systemNames.length;
  for (let i = 0; i < len; i++) {
    const name = systemNames[i];
    const prev = systems[name];
    systems[name] = stepNumbers[i];
    if (systems[name] <= prev) return false;
  }
  return true;
}