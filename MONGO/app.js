const express = require('express');
require('./config/dbConfig');
const Task = require('./models/taskmodels');

const PORT = 3004;

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('<h1>Welcome to home page</h1>');
});

app.post('/tasks', async (req, res) => {
  try {
    const taskInfo = req.body;
    console.log(taskInfo);

    const newTask = await Task.create(taskInfo);

    res.status(201);
    res.json({
      status: 'success',
      data: {
        task: newTask,
      },
    });
  } catch (error) {
    console.log('Error in post: ', error);
    res.status(500);
    res.json({
      status: 'failure',
      message: 'Internal server Error',
    });
  }
});

app.listen(PORT, () => {
  console.log(`link http://localhost:${PORT}/`);
});
