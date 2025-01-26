const heading = document.getElementsByTagName('h2');
heading[2].innerHTML = 'title 3';
console.log(heading);

const heading2 = document.getElementById('title');
heading2.innerHTML = 'title 2';

const para = document.getElementsByClassName('para');
console.log(para[0]);

for (let i = 0; i < para.length; i++) {
  para[i].style.color = 'white';
  para[i].style.backgroundColor = 'green';
}