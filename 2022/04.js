function fitsInOneBox(boxes) {
    boxes.sort((a, b) => a.l - b.l);
    return boxes.every((box, i) => {
        if (i === 0) return true;
        const prev = boxes[i - 1];
        return prev.l < box.l && prev.w < box.w && prev.h < box.h;
    });
}