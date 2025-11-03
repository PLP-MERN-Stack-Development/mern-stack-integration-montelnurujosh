// server/config/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Check that process.env.MONGO_URI is NOT undefined
    const conn = await mongoose.connect(process.env.MONGO_URI); 
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;