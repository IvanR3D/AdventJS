export default function learn(time, courses) {
    let best = null;
    for (let i = 0; i < courses.length; i++) {
        for (let j = i + 1; j < courses.length; j++) {
            const value = courses[i] + courses[j];
            if (value === time) return [i, j];
            if (value < time) {
                if (best === null) { best = [i, j]; } 
                else if (courses[best[0]] + courses[best[1]] < value) {
                    best = [i, j];
                }
            }
        }
    }
    return best;
}