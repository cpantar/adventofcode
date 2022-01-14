module.exports = (input) => {
    const numbers = input.split('\n').map(x => parseInt(x));
    let largerMeasurements = 0;
    let sum_prev = 0;

    for(let i=0; i<numbers.length; i++) {
        let sum = 0;
        for( let j=i; j<i+3; j++){
            sum = sum + numbers[j];
        }

        if(sum > sum_prev && sum_prev != 0) {
            largerMeasurements ++;
        }
        sum_prev = sum
    }

    return largerMeasurements;
    };


    // 1,2,3,4,5,6,7,8,9,10