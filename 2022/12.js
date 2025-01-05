function selectSleigh(distance, sleighs) {
    for (let i = sleighs.length - 1; i >= 0; i--) {
        if (sleighs[i].consumption * distance <= 20)
            return sleighs[i].name;
    }
    return null;
}