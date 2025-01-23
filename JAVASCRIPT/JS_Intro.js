// console.log('Hello world');

// ----------------------------hoisting and TPZ --------------------------------
// console.log(state);
// var state = 'AP'; // undefined

// console.log(country);
// let country = 'india'; // reference error because the variable is in temporal dead zone(decleared but not initilized

//-------------------------------let, const, var -------------------------------

// mainly differs in the scope , re-assignment , hoistiong

// var --> function- scoped, resigned and redeclered, when hoisted it is initilized with undefined

// resigned & declered
// var a = 10;
// var a = 20;
// console.log(a);

// function scoped
// function text() {
//   if (true) {
//     var a = 'hello';
//   }
//   console.log(a); // we can acces it here funciton scoped
// }

// text();
// console.log(a); // cannot access outside the function

// Let --> block-scoped, re-assigned but not redecleared, when hoistd it moves to the top and it is TDZ

// block-scoped
// function text() {
//   if (true) {
//     let a = 'hello!';
//     console.log(a);
//   }
//   console.log(a); // cnnot access outside the if block
// }

// text();

// re-assignment
// let a = 10;
// // let a = 20 // not works
// a = 20;
// console.log(a); // works output:- 20

// const --> block-scoped, cannot re-assigned and re-declered, in hoisting same as let

//----------------------------------Data types-------------------------------

// premitive datatypes
// --> immutable, store the value directly to the stack , fixed size, accessed by value,
// ex: number, string, boolean , undefined , null etc

// non - premitive datatypes
// --> mutable, access by reference , reference is stored in stack and actual value stored in heap, size is not fixed

// const city = 'delhi';
// const country = 'india';

// const address = city + ' , ' + country;
// console.log(address);

// ------------------------------------Type coercion--------------------------

// with + operator --> when both the operants are numbrs it does add operation, otherwise i.e. when the operand is string it does the string concadation

// const check_co = 10 + 20;
// console.log(check_co);
// console.log(10 + 'something');
// console.log(10 + 'something' + 10);
// console.log(10 + 10 + 'something');
// console.log(10 - '30'); // automaically convertes the sting ino number
// console.log('30' - 10); // same
// console.log('hello' - 'world'); // it outputs NAN for such non meaningful cases
// console.log('10' * 10);
// console.log(10 - 'hello'); // NAN

//-------------------------------------Loose and strict equality----------------

//==(loose equality)

// before checking it performs type coericion it results unexcepted results

// console.log(1 == '1'); // true
// console.log(true == 1);
// console.log(null == undefined);

//=== (strict equlity)

// it gives the accurate results it does not perform type coerision

// console.log(1 === '1');
// console.log(true === 1);
// console.log('Delhi' == 'INDIA');

//---------------------------------Template leterals----------------------------

// const name = 'santosh';
// const age = 20;

// console.log(`my name is ${name} i am ${age} years old`);

// ------------------------------------functions--------------------------------

// function text(){
//     console.log("this is the function");
// }

// text(); // function call  or invocation

// text2(); // this will aslo work due to hoisting

// function text2() {
//   console.log('this is function declered after calling');
// }

//--------------------------------Arrow function--------------------------------

// const text = () => {
//   console.log('this is from the arrow function');
// };

// text();

// const name = prompt('please enter the name');
// console.log(name);

// const a = '1.dd';
// const b = '1';
// const c = '1.345';

// const na = Number(a);
// const nb = Number(b);
// const nc = Number(c);

// console.log(na, nb, nc);
