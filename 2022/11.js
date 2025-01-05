function getCompleted(part, total) {
    const [ph, pm, ps] = part.split(':').map(Number);
    const [th, tm, ts] = total.split(':').map(Number);
    const partSeconds = ph * 60 * 60 + pm * 60 + ps;
    const totalSeconds = th * 60 * 60 + tm * 60 + ts;
    const calcMCD = function (a, b) {
        return b === 0 ? a : calcMCD(b, a % b);
    };
    const mcd = calcMCD(partSeconds, totalSeconds);
    const num = partSeconds / mcd;
    const den = totalSeconds / mcd;
    return num + '/' + den;
}