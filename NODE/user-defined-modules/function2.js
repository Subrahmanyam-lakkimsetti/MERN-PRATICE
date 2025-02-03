const { sum } = require('./function1.js');

console.log('function2 execution started');
const arraysum = (arr) => {
  console.log('in sumarray function');
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total = sum(total, arr[i]);
  }
  return total;
};

console.log('end of function2');

module.exports = {
  arraysum,
};
