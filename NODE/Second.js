// console.log('sum function....');

// const sum = (a, b) => {
//   return a + b;
// };

// module.exports = sum;

const fs = require('node:fs/promises');

const start = Date.now();
console.log('---start---', start);

function myReadFile() {
  console.log('---Reading File---');
  const ans = fs.readFileSync('./dummy.txt', 'utf-8');
  console.log('---File Reading Done---');
  console.log('----------ans------------\n');
}

myReadFile();
console.log('---Middle---');
myReadFile();

const end = Date.now();
console.log('---End---', end);
