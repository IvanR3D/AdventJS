export default function countDecorations(bigTree) {
    if (bigTree === null) return 0;
    let counter = bigTree.value;
    counter += countDecorations(bigTree.left);
    counter += countDecorations(bigTree.right);
    return counter;
}