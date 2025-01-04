export default function countPackages(carriers, carrierID) {
    let counter = 0;
    carriers.forEach(carrier => {
        if (carrier[0] === carrierID) {
            counter += carrier[1];
            if (carrier[2].length === 0) { return carrier[1]; } 
            else {
                carrier[2].forEach(carrier => {
                    counter += countPackages(carriers, carrier);
                });
            }
        }
    });
    return counter;
}