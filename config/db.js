//##const mongoose = require('mongoose');
//const config = require('config');
//const db = config.get('mongoURI');

//const connectDB = async () => {
//  try {
//    await mongoose.connect(db, {
//      useNewUrlParser: true, 
//     useUnifiedTopology: true
//    });

//    console.log('MongoDB Connected...');
//  } catch (err) {
//    console.error(err.message);
//    process.exit(1);
//  }
//};

//module.exports = connectDB;

const connectDB = async () => {
  console.log('⛔ Skipping DB connection. Running in no-DB mode.');
};

module.exports = connectDB;
