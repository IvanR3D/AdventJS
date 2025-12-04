function findNaughtyStep(original, modified) {
  const oLen = original.length;
  const mLen = modified.length;
  const minLen = Math.min(oLen, mLen);
  const isHigher = oLen < mLen;
  for (let i = 0; i < minLen; i++) {
    if (original[i] !== modified[i])
      return isHigher ? modified[i] : original[i];
  }
  if (oLen !== mLen) {
    return isHigher ? modified[minLen] : original[minLen];
  }
  return "";
}