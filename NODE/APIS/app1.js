const express = require('express');
const fsPromises = require('fs/promises');
const PORT = 1010;

const app = express();

app.use(express.json());

// READ
app.get('/', (req, res) => {
  // dummy api to test if server is working or not
  res.send(`<h1>Server is running on PORT : ${PORT}</h1>`);
});

// READ
app.get('/tasks', async (req, res) => {
  try {
    const text = await fsPromises.readFile('./db.json');
    const obj = JSON.parse(text); // sync process
    res.status(200);
    res.json({
      status: 'success',
      data: {
        tasks: obj,
      },
    });
  } catch (err) {
    res.status(500);
    res.json({
      status: 'success',
      message: 'Internal server error',
    });
  }
});

// CREATE
// make a new task and add it to the taskList, that is, DB
app.post('/tasks', async (req, res) => {
  try {
    const newobj = req.body;
    console.log('newobj: ', newobj);

    // read the current list
    let text = await fsPromises.readFile('db.json', 'utf-8');
    if (text.length == 0) {
      text = '[]';
    }
    const arr = JSON.parse(text);

    let newID = 1;
    if (arr.length !== 0) {
      const lastTask = arr[arr.length - 1];
      newID = lastTask.id;
      newID += 1;
    }

    newobj.id = newID;
    // then append the new data into it
    arr.push(newobj);

    // save the new list
    const textData = JSON.stringify(arr);
    await fsPromises.writeFile('./db.json', textData);

    res.status(201);
    res.json({
      status: 'success',
    });
  } catch (err) {
    res.status(500);
    res.json({
      status: 'fail',
      message: 'internal server error',
    });
  }
});

//update
app.patch('/tasks/:taskid', async (req, res) => {
  try {
    const { taskid } = req.params;
    
  } catch (err) {
    console.log('error :', err);
    res.status(500);
    res.json({
      status: 'fail',
      message: 'internal server Error',
    });
  }
});

app.listen(PORT, () => {
  console.log(`
-------------------------------------------------
------- Server Started on PORT : ${PORT} --------
------- link: http://localhost:${PORT}/ ---------
-------------------------------------------------
`);
});
