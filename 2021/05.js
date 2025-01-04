export default function daysToXmas(date) {
    const target = new Date('Dec 25, 2021');
    const diff = target - date;
    return Math.ceil(diff / 86400000);
}