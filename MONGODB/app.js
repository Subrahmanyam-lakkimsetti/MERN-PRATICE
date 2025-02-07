require('dotenv').config();
// create a basic server first

const express = require('express');
const Task = require('./models/taskmodel.js');
require('./config/dbconfig.js');

const cors = require('cors');
const PORT = process.env.PORT || 2009;
const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('<h1>Heelo welcome to web page</h1>');
});

app.get('/tasks', async (req, res) => {
  try {
    const data = await Task.find();
    res.status(200).json({
      status: 'success',
      data,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      status: 'failure',
      message: 'Internal server error',
    });
  }
});

app.post('/tasks', async (req, res) => {
  try {
    const requiredData = req.body;
    console.log(requiredData);

    await Task.create(requiredData);

    res.status(201).json({
      status: 'success',
    });
  } catch (error) {
    console.log('error in post: ', error.name);
    if (error.name === 'ValidationError') {
      res.status(400).json({
        status: 'failure',
        message: error.message,
      });
    } else {
      res.status(500).json({
        status: 'failure',
        message: 'Internal server error',
      });
    }
  }
});

app.delete('/tasks/:taskId', async (req, res) => {
  try {
    const { taskId } = req.params;
    const task = await Task.findByIdAndDelete(taskId);
    console.log(task);
    if (task == null) {
      res.status(400).json({
        status: 'failure',
        message: 'Task Id does not exists',
      });
      return;
    }
    res.status(200).json({
      status: 'success',
      task,
    });
  } catch (error) {
    console.log('error in delete: ', error.message);
    if (error.name === 'CastError') {
      res.status(400).json({
        status: 'failure',
        message: 'Invalid parameter',
      });
    } else {
      res.status(500).json({
        status: 'failure',
        message: 'internal server error',
      });
    }
  }
});

app.patch('/tasks/:taskID', async (req, res) => {
  try {
    // get the task id
    const { taskID } = req.params;

    // get the req data
    const { _id, ...reqData } = req.body; // id and the not changable

    // update function to update the task
    const data = await Task.findByIdAndUpdate(taskID, reqData, {
      returnDocument: 'after',
      runValidators: true,
    });
    if (data == null) {
      res.status(400).json({
        status: 'failure',
        message: 'task id does not exists',
      });
      return;
    }
    console.log(data);
    res.status(200).json({
      status: 'sucess',
      data,
    });
  } catch (error) {
    console.log('error in patch: ', error.name);
    if (error.name === 'CastError') {
      res.status(400).json({
        status: 'failure',
        message: 'Invalid parameter',
      });
    } else {
      res.status(500).json({
        status: 'failure',
        message: 'Internal server error',
      });
    }
  }
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/`);
});
