/**
 * @param {string} timeWorked - Time worked in hh:mm:ss format.
 * @param {string} totalTime - Total estimated time in hh:mm:ss format.
 * @returns {string} - The completed percentage rounded to the nearest integer with a % sign.
 */
function getCompleted(timeWorked, totalTime) {
    const parsedWorked = timeWorked.split(':').map(Number);
    const parsedTime = totalTime.split(':').map(Number);
    const workedSecs = (parsedWorked[0] * 60 * 60) + (parsedWorked[1] * 60) + parsedWorked[2];
    const totalSecs = (parsedTime[0] * 60 * 60) + (parsedTime[1] * 60) + parsedTime[2];
    return Math.round((workedSecs / totalSecs) * 100) + '%';
}
