const express = require('express');
const fsPromises = require('fs/promises');

const app = express();

app.use(express.json());
// middleware :: reads the request body , attatch it as a object to the req object

app.get('/', (req, res) => {
  res.send('<h1>Welcom to home page</h1>');
});

app.get('/tasks', async (req, res) => {
  // read the data from the db (string) convert it to the json obj and send the response
  const textdata = await fsPromises.readFile('./db.json', 'utf-8');
  // console.log(typeof textdata); // string , need to cnvert it to the obj
  const dataobj = JSON.parse(textdata);
  // console.log(typeof dataobj);
  res.json(dataobj);
});

app.post('/tasks', async (req, res) => {
  try {
    // i get the req body
    const reqData = req.body; // object

    if (reqData.name == undefined || reqData.name.length == 0) {
      res.status(400);
      res.json({
        status: 'failure',
        message: 'name is not defined or empty',
      });
      return;
    }

    // get the list
    let textData = await fsPromises.readFile('./db.json', 'utf-8'); // string
    // console.log(textData.length);
    if (textData.length == 0) {
      textData = '[]';
    }

    // console.log(textData.length);
    const dataObj = JSON.parse(textData);
    // console.log(dataObj); // array

    console.log('length', dataObj.length);
    let newid = 1;
    if (dataObj.length !== 0) {
      const lastindex = dataObj[dataObj.length - 1];
      // console.log(lastindex);
      newid = lastindex.id;
      newid += 1;
    }

    reqData.id = newid;

    dataObj.push(reqData);
    // console.log(newid);

    // dataObj.id = newid;

    // updated the data (write the updated data to the db)
    // before updating convert the data to the sting
    const DataString = JSON.stringify(dataObj);
    await fsPromises.writeFile('./db.json', DataString);

    res.json({
      status: 'success',
    });
  } catch (error) {
    console.log(error);
    res.status(500);
    res.json({
      status: 'failure',
      message: 'internal server error',
    });
  }
});

app.patch('/tasks/:taskID', async (req, res) => {
  try {
    const { taskID } = req.params;
    // console.log(taskID);

    // grt the data object from the req bogy through the middleware
    const { id, ...updateData } = req.body;
    console.log(updateData);

    // read the all data

    const textdata = await fsPromises.readFile('./db.json', 'utf-8');
    const dataObj = JSON.parse(textdata);

    // get the correct index to update from the data

    const requiredindex = dataObj.findIndex((elem) => elem.id == taskID);
    // console.log(dataObj[requiredindex]);

    if (requiredindex == -1) {
      res.status(400);
      res.json({
        status: 'falure',
      });
    } else {
      const oldData = dataObj[requiredindex];
      const newData = { ...oldData, ...updateData };
      dataObj[requiredindex] = newData;

      // write this data into the db

      const StringData = JSON.stringify(dataObj);
      await fsPromises.writeFile('./db.json', StringData);

      res.status(200);
      res.json({
        status: 'success',
      });
    }
  } catch (error) {
    console.log(error);
  }
});

app.delete('/tasks/:taskID', async (req, res) => {
  try {
    const { taskID } = req.params;
    const textData = await fsPromises.readFile('./db.json', 'utf-8');
    const dataObj = JSON.parse(textData); // whole data obj

    const requiredIndex = dataObj.findIndex((task) => task.id == taskID);
    // console.log(dataObj[requiredIndex]);
    console.log(requiredIndex);

    if (requiredIndex == -1) {
      res.status(400);
      res.json({
        status: 'failure',
        message: 'invalid taskID',
      });
    } else {
      dataObj.splice(requiredIndex, 1);
      // console.log(dataObj);

      const StringData = JSON.stringify(dataObj);
      await fsPromises.writeFile('./db.json', StringData);

      res.json({
        status: 'success',
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500);
    res.json({
      status: 'failure',
      message: 'server internal error',
    });
  }
});

app.listen(4005, () => {
  console.log('server started');
});
