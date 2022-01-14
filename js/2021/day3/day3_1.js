module.exports = (input) => {
    const binary = input.split('\n');
    const bin_len = binary[0].length;
let gamma ="";
let epsilon="";

for(i=0;i<bin_len;i++) {
let one = 0;
let zero = 0;
binary.map(x => {
    if(x[i] == '0'){
        zero++;
    }
    else {
        one ++;
    }
});

if(one>zero){
    gamma = gamma + '1';
    epsilon = epsilon + '0';
}
else {
    gamma = gamma + '0';
    epsilon = epsilon + '1';
}
}
let gammabin = parseInt(gamma, 2);
let epsilonbin = parseInt(epsilon,2);

return gammabin*epsilonbin

};