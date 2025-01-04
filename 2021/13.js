export default function wrapGifts(gifts) {
    if (gifts.length === 0) return []
    const result = [];
    const len = gifts[0].length;
    const border = `*${'*'.repeat(len)}*`;
    result.push(border);
    gifts.forEach(gift => { result.push(`*${gift}*`); });
    result.push(border);
    return result;
}