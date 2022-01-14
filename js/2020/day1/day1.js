module.exports = (input) => {
const numbers = input.split('\n').map(x => parseInt(x));
const numSet = new Set()

for(let i =0; i<numbers.length; i++) {
  numSet.add(numbers[i]);
}

for(let i =0; i<numbers.length; i++) {
  let otherNum = Math.abs(numbers[i] - 2020);
  if(numSet.has(otherNum)) {
    return otherNum*numbers[i]
  }
}
};