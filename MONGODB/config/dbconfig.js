const mongoose = require('mongoose');

const connectDb = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://lsubrahmanyam1234:1234@cluster0.j3nwg.mongodb.net/TASK_MANAGEMENT?retryWrites=true&w=majority&appName=Cluster0'
    );
    console.log('✅ Database connected sucessfully');
  } catch (error) {
    console.log(error);
    console.log('❌ Database not connected');
  }
};

connectDb();
