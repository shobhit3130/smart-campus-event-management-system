const express = require("express");
const app = express();

const connectDB = require("./config/db");   
connectDB();  

app.use(express.json());


const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);


app.get("/", (req, res) => {
    res.send("API Running");
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});