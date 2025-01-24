const heading = document.getElementById('heading');
console.log(heading);

function getrandomcolor() {
  let number = Math.random();
  redcolor = Math.floor(number * 225);

  let number2 = Math.random();
  greencolor = Math.floor(number2 * 225);

  let number3 = Math.random();
  bluecolor = Math.floor(number3 * 225);

  let color = `rgb(${redcolor} ${greencolor} ${bluecolor})`;
  return color;
}

setInterval(() => {
  heading.style.backgroundColor = getrandomcolor();
  heading.style.color = getrandomcolor();
}, 400);

// console.log('START');

// const handleWelcome = () => {
//   console.log('WELCOME !');
//   setTimeout(function myTimer() {
//     console.log('Hello');
//   }, 3000);
// };

// handleWelcome();

// console.log('END');

const body = document.getElementsByTagName('body')[0];
const btn1 = document.getElementsByClassName('text1')[0];
console.log(btn1);
const btn2 = document.getElementsByClassName('text2')[0];

body.addEventListener(
  'click',
  () => {
    console.log('body');
  },
  { capture: true }
);

btn1.addEventListener('click', () => {
  console.log('btn1');
});

btn2.addEventListener('click', () => {
  console.log('btn2');
});
