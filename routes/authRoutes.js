const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");
const authMiddleware = require("../models/middleware/authMiddleware");


router.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        let user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({
                message: "User already exists"
            });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        user = new User({
            name,
            email,
            password: hashedPassword
        });

        await user.save();

        const payload = {
            user: {
                id: user.id
            }
        };

        const token = jwt.sign(
            payload,
            "yourSecretKey",
            { expiresIn: "1h" }
        );

        res.status(201).json({
            token
        });

    } catch (error) {
        console.error("Register Error:", error);
        res.status(500).json({
            message: "Server Error"
        });
    }
});


router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                message: "Invalid Credentials"
            });
        }

        const isMatch = await bcrypt.compare(
            password,
            user.password
        );

        if (!isMatch) {
            return res.status(400).json({
                message: "Invalid Credentials"
            });
        }

        const payload = {
            user: {
                id: user.id
            }
        };

        const token = jwt.sign(
            payload,
            "yourSecretKey",
            { expiresIn: "1h" }
        );

        res.json({
            token
        });

    } catch (error) {
        console.error("Login Error:", error);
        res.status(500).json({
            message: "Server Error"
        });
    }
});


router.get("/profile", authMiddleware, async (req, res) => {
    try {
        const user = await User.findById(req.user.id)
            .select("-password");

        res.json(user);

    } catch (error) {
        console.error("Profile Error:", error);
        res.status(500).json({
            message: "Server Error"
        });
    }
});

module.exports = router;