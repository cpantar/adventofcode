module.exports = (input) => {
    const numbers = input.split('\n').map(x => parseInt(x));
    let largerMeasurements = 0;
    for(let i=1; i<numbers.length; i++) {
        if(numbers[i]>numbers[i-1]) {
            largerMeasurements ++;
        }
    }

    return largerMeasurements;
    };