export default function checkIsSameTree(treeA, treeB) {
    if (treeA.value !== treeB.value) return false;
    let result;
    if (treeA.left && treeB.left) {
        result = checkIsSameTree(treeA.left, treeB.left);
        if (!result) return false;
    }
    if (treeA.right && treeB.right) {
        result = checkIsSameTree(treeA.right, treeB.right);
        if (!result) return false;
    }
    return true;
}