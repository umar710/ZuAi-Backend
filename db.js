const mongoose = require("mongoose");

require("dotenv").config();

const mongooseURL = process.env.MONGOODB_URL; //Define the MongoDB URL from dotEnv file
//const mongooseURL = process.env.MONGOODB_URL_LOCAL;

//Define db function: using Asynchronous Database Connection Function, try , catch Method.
const db = async () => {
  try {
    // Set up MongoDB connection
    await mongoose.connect(mongooseURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB Connected..");
  } catch (e) {
    console.log(e);
  }
};

db(mongoose.connection); // Access the Default Connection Object
module.exports = db; //Export the Database Connection
