const mongoose = require('mongoose');

const connecTODb = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://lsubrahmanyam1234:1234@cluster0.jfbwh.mongodb.net/TASK_MANAGEMENT?retryWrites=true&w=majority&appName=Cluster0'
    );
    console.log('Database connected');
  } catch (error) {
    console.log('❌ database not connected');
  }
};

connecTODb();
