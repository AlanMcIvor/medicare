import React from "react";
import Button from "../components/Button.jsx";

const Welcome = ({ handleGetStartedClick }) => {
  return (
    <>
      <div className="img_container mx-auto  bg-gray-100">
        <img
          className="mx-auto p-5"
          src="../assets/welcome.png"
          alt="An illustration of two doctors underneath a heart icon"
        />
      </div>

      <div className="text_container flex flex-col mt-10 md:mt-5">
        <div className="title_container text-4xl sm:text-6xl font-bold flex gap-5 justify-center items-center mt-20 mb-10">
          <h1>
            Medi<span className="text-[#758E7D]">Care</span>
          </h1>
          <h1>Connect</h1>
        </div>
        <h3 className="text-center text-2xl sm:text-5xl">Hospital Services</h3>
      </div>
      <div className="btn_container mt-10 text-center">
        <Button page="Welcome" onClick={handleGetStartedClick} />
      </div>
    </>
  );
};

export default Welcome;
