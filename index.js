
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const UserModel = require("./Models/UserModel");

const app = express();
const PORT = 4000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
mongoose
  .connect("mongodb://localhost:27017/jwt", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connection successful");
  })
  .catch((err) => {
    console.log(err.message);
  });

// User Registration Endpoint
app.post("/SignUp", async (req, res) => {
  try {
    const { name, email, phone, password, confirmPassword } = req.body;

    // Compare password and confirmPassword
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }

    // Create a new user document
    const newUser = new UserModel({
      name,
      email,
      phone,
      password,
      confirmPassword,
    });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`);
});
