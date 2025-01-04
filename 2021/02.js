export default function listGifts(letter) {
    const gifts = {};
    letter.split(' ').forEach(toy => {
        if (!toy.includes('_') && toy.length > 0) {
            if (gifts[toy] !== undefined) { gifts[toy]++; } 
            else { gifts[toy] = 1; }
        }
    });
    return gifts;
}