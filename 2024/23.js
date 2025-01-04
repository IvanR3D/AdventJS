function findMissingNumbers(nums) {
    const unique = new Set(nums);
    const max = Math.max(...nums);
    const result = [];
    for (let i = 1; i <= max; i++) {
        if (!unique.has(i)) result.push(i);
    }
    return result;
}