const mongoose = require('mongoose');

const scheema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  date: Date,
  assignment: {
    type: String,
    enum: ['Alice', 'BOB'],
    required: true,
  },
});

const Task = mongoose.model('task', scheema);

module.exports = Task;
