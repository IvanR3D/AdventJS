/**
 * @param {string} fromTime - The current time in elf format
 * @param {string} takeOffTime - The take off time in elf format
 * @returns {number} The time in seconds until take off
 */
function timeUntilTakeOff(fromTime, takeOffTime) {
  const parsedFrom = fromTime
    .replaceAll("*", "-")
    .replaceAll("@", "T")
    .replaceAll("|", ":")
    .replaceAll(" NP", "Z");
  const parsedTake = takeOffTime
    .replaceAll("*", "-")
    .replaceAll("@", "T")
    .replaceAll("|", ":")
    .replaceAll(" NP", "Z");

  return Math.floor((new Date(parsedTake) - new Date(parsedFrom)) / 1000);
}