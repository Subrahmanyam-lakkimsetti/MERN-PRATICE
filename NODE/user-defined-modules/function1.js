console.log('function1 executon started');

const sum = (a, b) => {
  console.log('in sum function');
  return a + b;
};

const divide = (a, b) => {
  console.log('in divide function');
  return a / b;
};

console.log('end of function1');

module.exports = {
  sum,
  divide,
};
