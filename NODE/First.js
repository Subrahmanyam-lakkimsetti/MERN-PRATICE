console.log('Node js');
const add = require('./Second.js');

const ArraySum = (arr) => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total = add(total, arr[i]);
  }

  return total;
};

module.exports = { ArraySum };
