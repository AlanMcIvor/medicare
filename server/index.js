// express is used for bulding web server
const express = require("express");
// moongoose is used for interacting with mongoDB
const mongoose = require("mongoose");
// cors is used for handling cros origin resource sharing in web applications
const cors = require("cors");
// library for password hashing
const bcrypt = require("bcryptjs");
// json web token library for user authentication
const jwt = require("jsonwebtoken");
// dotenv file for storing sensitive data
require("dotenv").config();
// import user model
const User = require("./models/User");
// import department model

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

// route to handle fetching user data
app.get('/api/users', async (req, res) => {
  try {
    //extract the token from the request headers
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      return res.status(401).json({ error: 'Unauthorised: no token provided' });
    }

    // verify token
    jwt.verify(token, 'your-secret-key', async (err, decoded) => {
      if (err) {
        return res.status(401).json({ error: 'unauthorized: invalid token' });
      }
      // find user by decoded userId and populate associated deoartment details
      const user = await User.findById(decoded.userId).populate('department_id');

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      // return formated user data
      const formatedUser = {
        _id: user._id,
        email: user.email,
        forename: user.forname,
        surname: user.surname,
        guardian: user.guardian,
        guardian_name: user.guardian_name,
        notes: user.notes,
        dob: user.dob,
        patient_number: user.patient_number,
        appoitment_date: user.appoitment_date,
        appoitment_notes: user.appointment_notes,
        department_id: user.department_id ? {
          name: user.department_id.name,
          details: user.department_id.details,
          consultant: user.department_id.consultant,
          nurse: user.department_id.nurse,
          consultant_img: user.department_id.consultant_img,
          nurse_img: user.department_id.nurse_img,
          img_one: user.department_id.img_one,
          img_two: user.department_id.img_two,
          img_three: user.department_id.img_three,
          map: user.department_id.map,
        } : null,
      };
    })
  }
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// ECOoFeXxrdNn0HHB
// alanmcivor27
