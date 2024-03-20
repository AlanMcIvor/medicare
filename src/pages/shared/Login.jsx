import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // const [email, setEmail] = useState("");
  const [patientNumber, setPatientNumber] = useState("");
  const [password, setPassword] = useState("");
  const [parent, setParent] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    // make a post request to the login endpoint witrh patient number and password
    try {
      const response = await axios.post("http://localhost:3000/api/Login", {
        patientNumber,
        password,
      });

      //if login is succesful, log a messege and the token recieved from teh server
      console.log("Login Successful");
      console.log("Token: ", response.data.token);

      // save token to local storage
      localStorage.setItem("token", response.data.token);
      // save patient num to local storage
      localStorage.setItem("patientNum", response.data.patientNumber);
      // save parent state to local storage
      if (parent) {
        localStorage.setItem("parent", true);
      } else {
        localStorage.removeItem("parent");
      }

      // if user is parent, redirect to the parent dashboard
      if (parent) {
        navigate("/ParentHome");
      } else {
        navigate("/PatientHome");
      }
    } catch (error) {
      // if login fails, log the error messaage
      console.error("Login Failed:", error.response.data.error);
    }
  };

  // load parent state from local storage
  useEffect(() => {
    // get parent state from local storage
    const storedParent = localStorage.getItem("parent");
    // if parent true set to true
    if (storedParent) {
      setParent(true);
    }
  }, []);

  return (
    <>
      <div className="img_container mx-auto  bg-gray-100">
        <img
          className="mx-auto p-5"
          src="../assets/login.png"
          alt="An illustration of two doctors with a pill container"
        />
      </div>

      <div className="login_container text-4xl sm:text-6xl font-bold flex gap-5 justify-center items-center mt-20 mb-10">
        <h1>
          Medi<span className="text-[#758E7D]">Care</span>
        </h1>
        <h1>Connect</h1>
      </div>
      <form className="text-center text-[26px] flex flex-col gap-5 items-center justify-center">
        <input
          className="border rounded-lg shadow-md min-w-[500px] p-2 text-left"
          type="string"
          id="patientNumber"
          placeholder="Patient Number"
          onChange={(e) => setPatientNumber(e.target.value)}
          value={patientNumber}
        />
        <input
          className="border rounded-lg shadow-md min-w-[500px] p-2 text-left"
          type="password"
          id="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <label
          htmlFor="parentStatus"
          className="flex items-center gap-2 items-center"
        >
          Parent/Gaurdian?
          <input
            type="checkbox"
            id="parentStatus"
            name="parentStatus"
            value="parentStatus"
          />
        </label>
      </form>
      <div className="btn_container mt-10 text-center">
        <input
          onClick={handleLogin}
          type="submit"
          className="text-2xl bg-[#1C3925] text-white min-w-[250px] px-2 py-3 rounded-full shadow-lg font-body cursor-pointer hover:translate-y-2 transition-transform"
        />
        <div className="forgot_password mt-2 text-blue-700 cursor-pointer">
          Forgot Password?
        </div>
      </div>
    </>
  );
};

export default Login;
