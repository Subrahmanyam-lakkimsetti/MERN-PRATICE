const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
  {
    workTitle: String, // one way to add a propertiry in scheema
    taskTitle: {
      // it helps to add more validations
      type: String,
      required: true,
    },
    assignee: {
      type: String,
      required: true,
    },
    deadline: Date,
    priority: {
      type: String,
      default: 'normal',
      enum: ['normal', 'low', 'high', 'urgent'], // only available options
    },
    status: {
      type: String,
      default: 'todo',
      enum: ['done', 'inprocess', 'todo', 'abendended'],
    },
  },
  { timestamps: true }
);

const Task = mongoose.model('tasks', taskSchema);

module.exports = Task;
