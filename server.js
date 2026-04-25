const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");

const app = express();


app.use(express.json());


mongoose.connect("mongodb://127.0.0.1:27017/smart-campus")
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));


app.use("/api/auth", authRoutes);


app.get("/", (req, res) => {
    res.send("API is running...");
});



app.listen(5000, () => {
    console.log(`Server running on port ${5000}`);
});