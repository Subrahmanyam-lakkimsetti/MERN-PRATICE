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
// --> mutable,
