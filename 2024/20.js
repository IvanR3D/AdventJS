/**
 * @typedef {Record<string, number>} GiftsCount
 */

/**
 * @typedef {{ missing: GiftsCount, extra: GiftsCount }} Result
 */

/**
 * @param {string[]} received
 * @param {string[]} expected
 * @returns {Result}
 */
function fixGiftList(received, expected) {
    const receivedGifts = received.reduce((acc, item) => {
        acc[item] = (acc[item] || 0) + 1;
        return acc;
    }, {});
    const expectedGifts = expected.reduce((acc, item) => {
        acc[item] = (acc[item] || 0) + 1;
        return acc;
    }, {});
    const missing = {};
    const extra = {};
    for (const gift in expectedGifts) {
        const expected = expectedGifts[gift];
        const received = receivedGifts[gift] || 0;
        if (received < expected) missing[gift] = expected - received;
    }
    for (const gift in receivedGifts) {
        const received = receivedGifts[gift];
        const expected = expectedGifts[gift] || 0;
        if (received > expected) extra[gift] = received - expected;
    }
    return { missing, extra }
}