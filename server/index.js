// express is used for bulding web server
const express = require("express");
// moongoose is used for interacting with mongoDB
const mongoose = require("mongoose");
// cors is used for handling cros origin resource sharing in web applications
const cors = require("cors");
// dotenv file for storing sensitive data
require("dotenv").config();

// create an express app and defin the port
const app = express();
const PORT = process.env.PORT || 5000;

// setting up middleware
app.use(express.json());
app.use(cors());

// connecting to the database
const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// event handling for connection
mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// ECOoFeXxrdNn0HHB
// alanmcivor27
