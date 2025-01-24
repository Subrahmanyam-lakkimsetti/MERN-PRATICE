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

// Let --> block-scoped, re-assigned but not redecleared, when hoistd it moves to the top and it is in TDZ

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

//---------------------------Objects--------------------------------------------

// const details = {
//   name: 'subrahmanyam',
//   age: 20,
//   address: 'amalapuram',
// };

// console.log(details);

// console.log(details.name);
// const person_age = details.age;
// console.log(person_age);

// details.address = 'Ambajipeta';
// console.log(details.address);

// console.log(details.mobile_number); // if the key is not present the value is undefined

// details.mobile_number = '9347848219';
// console.log(details);

//-----------------------------------loose equality----------------------------

// const person = {
//   name: 'santosh',
//   age: 20,
// };

// const person1 = {
//   name: 'santosh',
//   age: 20,
// };

// if (person == person1) {
//   console.log('equal');
// } else {
//   console.log('Not equal');
// }

// const person2 = person1;     // this is not a copy at all this is reference assignment
// console.log(person1);
// console.log(person2);
// if (person1 == person2) {
//   console.log('both objects are equal');
// } else {
//   console.log('not equal');
// }

// shallow copy // copies the premitive datatypes by values into the new one, and copy the reference to the new one
// i.e. if the original is nested copy nad the original is having a same reference.

// const details = {
//   name: 'subbu',
//   age: 20,
//   moreDetails: { address: 'abj' },
// };

// const details_copy = { ...details }; // way to create the shallow copy
// const details_copy = Object.assign({},details); // shallow copy

// details_copy.name = 'changed';
// console.log(details_copy.name);
// console.log(details.name);

// details_copy.moreDetails.address = 'something';
// console.log(details_copy.moreDetails.address);
// console.log(details.moreDetails.address);

// deep copy --> creates a new one that is totally independent on the original

// const details = {
//   name: 'subbu',
//   age: 20,
//   moreDetails: { address: 'abj' },
// };

// const details_copy = JSON.parse(JSON.stringify(details));

// details_copy.name = 'changed';
// console.log(details_copy.name);
// console.log(details.name);

// details_copy.moreDetails.address = 'something';
// console.log(details_copy.moreDetails.address);
// console.log(details.moreDetails.address);

//---------------------------Object(question)----------------------------------

// const car = {
//   engine: 'V8',
//   model: 'E6',
//   brand: 'Audi',
// };

// car.model = 'Square';
// car.mileage = 25;

// const new_car = { ...car };
// new_car.engine = 'V6';
// delete new_car.model;
// console.log(car);
// console.log(new_car);

// let a = 20; // 20 is mutable but the variable a is referenced to something else in the future
// a = 40;

// console.log(a);

// let b = a;
// a = 30;
// console.log(b, a);

//--------------------------------Spread operator------------------------------

// const arr = [1, 2, 3];
// const arr2 = [...arr, 4, 5];

// console.log(arr2);

// const obj = {
//   name: 'santosh',
//   age: 20,
// };

// const obj1 = { ...obj, name: 'something' }; // another usecase to change
// console.log(obj1);

//---------------------------static and dynamic key-----------------------------

// const dynamickey = 'color';
// const mobile = {
//   brand: 'realme',
//   model: '10 pro',
//   [dynamickey]: 'red',
// };

// console.log(mobile.brand); // static key that is hard coded

// console.log(mobile['brand']); // dynamic key
// console.log(mobile['color']);

// mobile['ram'] = '2gb';
// console.log(mobile.ram);

// const key = prompt('Enter key');
// const value = prompt('Enter value');

// mobile.key = value; // if you use static key it use the key name as key
// mobile[key] = value; // it will use the dynamic key as a name entered

// console.log(mobile);

// const obj = {
//   name: 'santosh',
//   age: 20,
// };

// //object iteration

// for (const key in obj) {
//   console.log(`${key} : ${obj[key]}`);
// }

// const arr = ['one', 'Two'];

// arr.push('Three');
// // arr.shift(); // removed from the front
// arr.unshift('Zero');
// // arr.pop(); // removed from the last

// // arr.splice(-1, 2, 'hh');
// // console.log(arr);

// // convert array to string

// console.log(arr.toString()); // joined by comma
// const arr1 = arr.join('..');
// console.log(arr1);

// const arr = [1, 2, 3, 'hello', 4.7];
// console.log(arr);

// const obj = {
//   name: 'santosh',
//   age: 19,
//   mobile: '9347848219',
//   address: 'abj',
// };

// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));
// console.log(Object.keys(obj).length);

//arrow function

// const sum = () => {
//   console.log(10 + 10);
// };

// sum();
