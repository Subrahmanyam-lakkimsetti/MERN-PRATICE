// fs module --> reading, writing , appending , deleting (sync & async)

//--------------------------------file system (fs)---------------------------------------------------------

//-----------------------------------reading------------------------------------------------------

// -----------------sync---------- // blocking

// readFileSync

// const { time } = require('console');
// const fs = require('fs');

// // const data = fs.readFileSync('./text.txt'); // it just print the buffer in large quantatity
// // we have to encode the data we are receiving

// const data = fs.readFileSync('./text.txt', 'utf8'); // you will get the text now

// console.log(data);

// understanding execution flow

// console.log('start of the file');

// const start = Date.now();

// const readingFile = () => {
//   console.log('inside the readingFile');
//   const data = fs.readFileSync('./text.txt', 'utf8'); // block the code until completion of reading data from the file
//   console.log(data);
// };

// readingFile();
// console.log('after the function call one time');
// readingFile();

// console.log('end of the file');

// const end = Date.now();
// console.log(end - start);

//--------------async-------------- // non-blocking

// readfile (async) --> using both fs and fs/ promise
// --> fs --> callbacks (traditional way) --> promises (modern way)

// const fs = require('fs'); // by using callbacks ---------

// console.log('Starting of the file');
// const readingFile = () => {
//   console.log('inside function');
//   fs.readFile('./text.txt', 'utf-8', (err, data) => {
//     console.log(data);
//   }); // this executes async after all the code executes // non-blocking
// };

// readingFile();
// console.log('after the first call');
// readingFile();

// console.log('End of the file');

// const fs = require('fs/promises'); // by using promises mordern way ------------

//-------------then & catch---------------

// console.log('start of the file');
// const readingFile = () => {
//   console.log('inside reading file');
//   const data = fs.readFile('./text.txt', 'utf-8');
//   data
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// readingFile();
// console.log('middle');
// readingFile();

// console.log('ending the file');

// ---------async & await ---------- to avoid callback hell

// console.log('start');

// const readingFile = async () => {
//   console.log('inside');
//   const dt = await fs.readFile('./text.txt', 'utf-8');
//   // executes at the end of the file after the call stack is empty
//   console.log(dt);
// };

// readingFile();
// console.log('middle');
// readingFile();

// console.log('end');

//-------------------------------------------------- writing ------------------------------------------------------------

// ----------------------sync------------------------------

// const fs = require('fs');

// fs.writeFileSync('./text.txt', 'hello world'); // basic

// console.log('start');

// const writingFile = () => {
//   console.log('inside');
//   fs.readFileSync('./text.txt', 'utf-8');
// };

// writingFile();
// console.log('middle');
// writingFile();

// console.log('end');

// --------------------async--------------------

// with fs

// const writingFile = () => {
//   console.log('inside');
//   fs.readFile('./text.txt', 'utf-8', (err, data) => {
//     console.log(data);
//   });
// };

// writingFile();
// console.log('end');

// const fs = require('fs/promises');

// const writingFile = () => {
//   console.log('inside');
//   const ans = fs.writeFile('./text.txt', 'this is from the callback');
//   ans.then(() => {
//     console.log('success');
//   });
// };

// writingFile();
// console.log('middle');
// writingFile();

// console.log('end');

// ----------------using async await

const fs = require('fs/promises');

const writingFile = async () => {
  console.log('inside');
  const ans = await fs.writeFile('./text.txt', 'this is from the callback');
  console.log('success');
};

writingFile();
console.log('middle');
writingFile();

console.log('end');

// to delete the filewe have to use unlink from the fs module
