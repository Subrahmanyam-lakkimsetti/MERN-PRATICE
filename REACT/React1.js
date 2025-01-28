// console.log(React); // it is a core library it contanis all the methods and the functons that are used to write the code
// console.log(ReactDOM); // it provide methods to interact with the actual DOM

// const parent = document.getElementById('root-main'); // actual dom

// const root = ReactDOM.createRoot(parent); // reactdom root that is connected to th actual dom

// const content = React.createElement(
//   'h2',
//   {},
//   'this is the text from teh reactDOM'
// ); // to create the element inside the reacrt dom

// root.render(content); // when this is called it compares the current virtualDOm to the new virtual dom if any diff it updates the actual dom(only necessary parts)

// ---------------------SOme example views--------------------

// const parent = document.getElementById('root-main');
// const root = ReactDOM.createRoot(parent);

// const title = React.createElement('h1', {}, 'this is the title');
// const para = React.createElement('p', {}, 'this is the paragraph');

// const div = React.createElement('div', {}, [title, para]);
// // this will push the title and para into the single div
// // because we hae to maintain only one Reactroot DOM

// root.render(div);

// call parent, root, render only once because react initilizes the single entry point for the app, updates dynamically through the virtual dom agter the initial render

// -----------------------objects functions-------------------

// const obj = {
//   name: 'santosh',
//   age: 20,
//   email: 'lsubrahmanyam1234@gmail.com',
// };

// console.log(obj);

// const function1 = (name, age) => {
//   const obj = {
//     name: name,
//     age: age,
//   };

//   return obj;
// };
// const fun1 = function1('subbu', 21);
// console.log(fun1);

//---------------methods to create react elements-------------

// const parent = document.getElementById('root-main');
// const root = ReactDOM.createRoot(parent);

// const newTitle = React.createElement('h2', {}, 'Hello from REAL React!');
// console.log('newTitle', newTitle);  // if we write like this we got got the same output as anotherTitle. that is the way to write actually, but create element that convert it into theat type it is useful method.

// const anotherTitle = {
//   $$typeof: Symbol.for('react.element'),
//   type: 'h2',
//   key: null,
//   ref: null,
//   props: {
//     children: 'Hello from REAL React!',
//   },
//   _owner: null,
//   _store: {},
// };  // it is complex method to write

// console.log(anotherTitle);
// root.render(anotherTitle);

// in second way code look like this

// const parent = document.getElementById("dom-root");
// const root = ReactDOM.createRoot(parent);

// const newTitle = {
//     $$typeof: Symbol.for("react.element"),
//     type: "h2",
//     key: null,
//     ref: null,
//     props: {
//         children: "Hello from REAL React!",
//     },
//     _owner: null,
//     _store: {},
// };

// const newPara = {
//     $$typeof: Symbol.for("react.element"),
//     type: "p",
//     key: null,
//     ref: null,
//     props: {
//         children: "Lorem text for dummy ...",
//     },
//     _owner: null,
//     _store: {},
// };

// const container = {
//     $$typeof: Symbol.for("react.element"),
//     type: "div",
//     key: null,
//     ref: null,
//     props: {
//         children: [newTitle, newPara],
//     },
//     _owner: null,
//     _store: {},
// };

// root.render(container);

//----------------------properties object---------------------

// const parent = document.getElementById('root-main');
// const root = ReactDOM.createRoot(parent);

// const stylem = {
//   color: 'red',  // key in camel case
// };

// const title = React.createElement(
//   'h1',
//   { style: stylem }, // we can give the attributes here
//   'this is the title of the book'
// );

// root.render(title);

//---------------------------jsx-----------------------------

// jsx--> javascript syntax extension
// browser not understand jsx, it only understand JS,
// jsx is converted into JS by transpiler ex:BABEL

// const parent = document.getElementById('root-main');
// const root = ReactDOM.createRoot(parent);

// const title = (
//   <div>
//     <h1 title="hello this is the title">this is the main heading</h1>
//     <p>this is the paragraph</p>
//   </div>
// ); // it is called the eact element

// root.render(title);

//---------------jsx components--------------------
const parent = document.getElementById('root-main');
const root = ReactDOM.createRoot(parent);

const Cards = (num) => {
  return (
    <div className="card">
      <h3>Image {num.number}</h3>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtnvAOajH9gS4C30cRF7rD_voaTAKly2Ntaw&s"></img>
    </div>
  );
};

const Muliplecards = (
  <div>
    <Cards number="1" />
    <Cards number="2" />
  </div>
);

root.render(Muliplecards);
