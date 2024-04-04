const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const allowedOrigins = ["http://localhost:3000"];
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);
app.use(express.json());

app._router.stack.forEach(function (r) {
  if (r.route && r.route.path) {
    console.log(r.route.path, r.route.stack[0].name);
  }
});
// MongoDB connection
// const MONGO_URI = 'mongodb+srv://karenmd:uC0CJVexilB0iGFK@cluster0.jz6h4uo.mongodb.net/portal?retryWrites=true&w=majority';

const MONGO_URI =
  "mongodb+srv://alanmcivor27:RsaZogIHcT4gYj1q@hospitalportal.a5ixj4i.mongodb.net/hospitalPortal?retryWrites=true&w=majority&appName=hospitalPortal";
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

// User model
const User = mongoose.model("User", {
  forename: String,
  surname: String,
  department: String,
  email: String,
  password: String,
  dob: Date,
  patientNumber: String,
  nextOfKin: String,
  nextOfKinName: String,
});

// Register route
app.post("/api/register", async (req, res) => {
  try {
    const { patientNumber, password } = req.body;

    // Check if the email already exists
    const existingUser = await User.findOne({ patientNumber });
    if (existingUser) {
      return res.status(400).json({ error: "Email already registered" });
    }

    // Hash the password before saving it to the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user instance and save it to the 'users' collection
    const newUser = new User({ patientNumber, password });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// ...

app.get("/api/users", async (req, res) => {
  try {
    // Extract the token from the request headers
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ error: "Unauthorized: No token provided" });
    }

    // Verify the token
    jwt.verify(token, "your-secret-key", async (err, decoded) => {
      if (err) {
        return res.status(401).json({ error: "Unauthorized: Invalid token" });
      }

      // The decoded.userId should match the structure used in jwt.sign during login
      const user = await User.findById(decoded.userId);

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      const formattedUser = {
        _id: user._id,
        email: user.email,
        forename: user.forename,
        surname: user.surname,
        department: user.department,
        dob: user.dob,
        patientNumber: user.patientNumber,
      };

      res.json(formattedUser);
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/api/login", async (req, res) => {
  try {
    console.log("Request body:", req.body);
    const { patientNumber, password } = req.body;

    console.log("Received patientNumber:", patientNumber);
    console.log("Received password:", password);

    console.log("Before user check");
    const user = await User.findOne({ patientNumber: patientNumber });
    console.log("Retrieved user:", user);

    if (user) {
      console.log("Found user:", user);
    } else {
      console.log("User not found");
    }

    if (!user) {
      return res
        .status(401)
        .json({ error: "Invalid patientnumber or password" });
    }

    const passwordMatch = password === user.password;
    console.log("Password match:", passwordMatch);

    if (!passwordMatch) {
      return res
        .status(401)
        .json({ error: "Invalid patient_number or password" });
    }

    // Include is_admin in the token payload
    const tokenPayload = {
      userId: user._id,
      // is_admin: user.is_admin
    };

    const token = jwt.sign(tokenPayload, "your-secret-key", {
      expiresIn: "1h",
    });

    // Include is_admin in the response
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.use((err, req, res, next) => {
  console.error("Error:", err);
  res.status(500).json({ error: "Internal server error" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// ECOoFeXxrdNn0HHB
// alanmcivor27

// "mongodb+srv://alanmcivor27:RsaZogIHcT4gYj1q@hospitalportal.a5ixj4i.mongodb.net/hospitalPortal?retryWrites=true&w=majority&appName=hospitalPortal";
