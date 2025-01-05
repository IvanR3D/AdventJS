function countTime(leds) {
    const ext = leds.join('') + leds.join('')
    const max = Math.max(...ext.split('1').map( seg => seg.length ))
    return max * 7
}