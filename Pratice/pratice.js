// const pr = fetch('https://dummyjson.com/users');
// pr.then((val) => {
//   console.log('sucess', val);
//   const pr2 = val.json();
//   pr2.then((data) => {
//     console.log(data);
//   });
// });
async function datacall() {
  const pr = await fetch('https://dummyjson.com/users');
  const pr2 = await pr.json();
  console.log(pr2);
}


datacall();