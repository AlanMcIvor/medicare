import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // const [email, setEmail] = useState();
  // const [password, setPassword] = useState();
  // const navigate = useNavigate();

  // /* This line declares a constant named handleSubmit, which is a
  // function that takes one parameter, e, representing an event object. */
  // const handleSubmit = (e) => {
  //   /* This line prevents the default behavior of form submission, which is to reload the page. */
  //   e.preventDefault();
  //   /*This line sends a POST request to the specified URL  */
  //   axios
  //     .post("", { email, password })
  //     .then((result) => {
  //       console.log(result);
  //       if (result.data === "Success") {
  //         navigate("/home");
  //       } else {
  //         navigate("/login");
  //         alert("Incorrect login details");
  //       }
  //     })
  //     .catch((err) => console.log(err));
  // };

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
      <form
        action=""
        className="text-center text-[26px] flex flex-col gap-5 items-center justify-center"
      >
        <input
          className="border rounded-lg shadow-md min-w-[500px] p-2 text-left"
          type="text"
          id="username"
          placeholder="Email/Patient Number"
        />
        <input
          className="border rounded-lg shadow-md min-w-[500px] p-2 text-left"
          type="password"
          id="username"
          placeholder="Password"
        />
      </form>
      <div className="btn_container mt-10 text-center">
        <button className="text-2xl bg-[#1C3925] text-white min-w-[250px] px-2 py-3 rounded-full shadow-lg font-body cursor-pointer hover:translate-y-2 transition-transform">
          Login
        </button>
        <div className="forgot_password mt-2 text-blue-700 cursor-pointer">
          Forgot Password?
        </div>
      </div>
    </>
  );
};

export default Login;
