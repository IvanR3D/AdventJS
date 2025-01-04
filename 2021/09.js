export default function groupBy(collection, it) {
    const result = {};
    for (const item of collection) {
        let key;
        if (typeof it === 'function') { key = it(item); } 
        else { key = item[it]; }
        if (!result[key]) { result[key] = []; }
        result[key].push(item);
    }
    return result;
}