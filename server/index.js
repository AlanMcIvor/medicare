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
  appointmentDate: String,
  appoitmentNotes: String,
  doctor: String,
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const Department = mongoose.model("Department", {
  consultant: String,
  details: String,
  department: String,
  department_id: { type: mongoose.Schema.Types.ObjectId, ref: "Department" }

});

app.get("/department", async (req, res) => {
  try {
    const departments = await Department.find();
    res.json(departments);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
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
      const user = await User.findById(decoded.userId)//.populate('department_id');

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
        nextOfKin: user.nextOfKin,
        nextOfKinName: user.nextOfKinName,
        patientNumber: user.patientNumber,
        appointmentNotes: user.appointmentNotes,
        appointmentDate: user.appointmentDate
          ? new Date(user.appointmentDate).toLocaleDateString("en-EN", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })
          : null,
        doctor: user.doctor,
        department_id: user.department_id
          ? {
              consultant: user.department_id.consultant,
              details: user.department_id.details,
              department: user.department_id.department,
            }
          : null,
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
