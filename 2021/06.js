export default function sumPairs(numbers, result) {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if (i !== j) {
                if (numbers[i] + numbers[j] === result) return [numbers[i], numbers[j]]
            }
        }
    }
    return null
}