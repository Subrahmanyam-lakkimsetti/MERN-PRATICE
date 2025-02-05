const mongoose = require('mongoose');

const ConnectToDb = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://lsubrahmanyam1234:12345@cluster0.5thbk.mongodb.net/DATABASE_PRATICE?retryWrites=true&w=majority&appName=Cluster0'
    ); // provide the url in the Database with the password
    console.log('----✅ Database connected sucessfully---------');
  } catch (error) {
    console.log('--------❌ Database not connected----------');
  }
};

ConnectToDb();
