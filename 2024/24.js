/**
 * @param {object} tree1 - The first binary tree.
 * @param {object} tree2 - The second binary tree.
 * @returns {[boolean, string]}
 */
function isTreesSynchronized(tree1, tree2) {
    if (tree1.value !== tree2.value) return [false, tree1.value];
    let result;
    if (tree1.left && tree2.right) {
        result = isTreesSynchronized(tree1.left, tree2.right);
        if (!result[0]) return [false, tree1.value];
    }
    if (tree1.right && tree2.left) {
        result = isTreesSynchronized(tree1.right, tree2.left);
        if (!result[0]) return [false, tree1.value];
    }
    return [true, tree1.value];
}