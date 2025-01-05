function wrapping(gifts) {
    const wrapped = [...gifts].map(gift => {
        const border = '*'.repeat(gift.length + 2);
        return `${border}\n*${gift}*\n${border}`;
    });
    return wrapped;
}