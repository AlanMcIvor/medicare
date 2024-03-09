import React from "react";

const Button = ({ page }) => {
  // conditionl rendering based on page
  let buttonText = "";
  if (page === "Welcome") {
    buttonText = "Get Started";
  } else if (page === "Login") {
    buttonText = "Login";
  }
  return (
    <>
      <button className="bg-[#1C3925] hover:translate-y-1 transition-transform cursor-pointer rounded-full shadow-lg px-10 sm:px-20 py-5 text-white text-[15px] sm:text-[26px]">
        {buttonText}
      </button>
    </>
  );
};

export default Button;
