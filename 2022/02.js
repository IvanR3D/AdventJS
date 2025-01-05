function countHours(year, holidays) {
    const result = holidays.reduce((sum, day) => {
        const date = new Date(day + '/' + year).getDay();
        if (date > 0 && date < 6) return sum + 2;
        return sum;
    }, 0);
    return result;
}