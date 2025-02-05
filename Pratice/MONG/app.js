const express = require('express');
require('./config/configdb');
const PORT = 3050;
const app = express();

app.get('/', (req, res) => {
  try {
    res.send('<h1>Welcome to the web world</h1>');
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log(`------ http://localhost:${PORT}/ -----`);
});
