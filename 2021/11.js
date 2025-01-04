export default function shouldBuyFidelity(times) {
    let price = 12;
    const normal = price * times;
    let fidelity = 250;
    while (times >= 1) {
        price = price * 0.75;
        fidelity += price;
        times--;
    }
    return fidelity < normal;
}