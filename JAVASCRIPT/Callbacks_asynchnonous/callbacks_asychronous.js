// function greet(callback) {
//   console.log('greet function');
//   callback();
// }

// function display() {
//   console.log('display function');
// }

// greet(display);

// passing with the data

// function multiply(a, b, display) {
//   const result = a * b;
//   display(result);
// }

// multiply(2, 3, (data) => {
//   console.log(data);
// });

// ---------------------------------asynchronous-------------------------------------------

// console.log('this is start');

// function browser(callback) {
//   console.log('inside function');
//   setTimeout(() => {
//     console.log('this is inside settime out');
//   }, 3000);
//   console.log('inside function end');
//   callback();
// }

// function name() {
//   console.log('this is the name function');
// }

// browser(name);
// console.log('this is the end of the program');

//---------------------------------------------------------------------------------

// console.log('start');

// const details = (age, display) => {
//   console.log('gathering data......');
//   setTimeout(() => {
//     console.log('data gathered sucessfully...');
//     const obj = { name: 'santosh', person_age: age };
//     display(obj);
//     console.log('Execuion completed');
//   }, 2000);
//   console.log('please wait..');
// };

// details(19, (data) => {
//   console.log('person details: ', data);
// });
