function dryNumber(dry, numbers) {
    dry = dry.toString();
    return Array.from({ length: numbers }, (_, i) => i + 1)
        .filter(barcode => barcode.toString().includes(dry));
}