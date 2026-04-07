const express = require("express");
const app = express();

app.use(express.json());

// 👇 YE LINE MOST IMPORTANT HAI
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

// Test route
app.get("/", (req, res) => {
    res.send("API Running");
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});