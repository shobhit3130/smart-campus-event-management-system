const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://admin:smart-event@cluster0.htxltv3.mongodb.net/smart-campus");
    console.log("MongoDB Connected");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;