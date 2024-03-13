import React, { useState } from "react";
import { FaRegArrowAltCircleDown } from "react-icons/fa";

const Dropdown = ({ icon, name, intro, subtitle, aside }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className="dropdown_container flex items-center justify-between bg-[#F1F3F7] mt-5 rounded-lg shadow-lg cursor-pointer"
        onClick={toggleDropdown}
      >
        <div className="icon bg-[#1C3925] p-4">{icon}</div>
        <p className="text text-2xl">{name}</p>
        <div className="arrow mr-4">
          <FaRegArrowAltCircleDown size={30} />
        </div>
      </div>

      {isOpen && (
        <div className="dropdown_text_container bg-[#F1F3F7] mt-5 p-2 shadow-lg">
          <p className="dropdown_intro">
            Radiology is the branch of medicine specializing in of the use of
            tests that take pictures or images of parts of the body to help
            diagnose and treat disease. The Department of Radiology offers a
            comprehensive range of diagnostic imaging and interventional
            radiology services for children and young people up to 16 years of
            age. Our department performs approximately 56,800 imaging procedures
            every year.
          </p>
          <div className="container grid grid-cols-2 gap-2">
            <div className="aside">
              <h4 className="text-2xl my-3">Why is Radiology Important?</h4>
              <p>
                Every Sector within health care relies <br />
                on radiology, including:
              </p>
              <ul className="list-disc ml-8">
                <li>Surgery</li>
                <li>Peadeatrics</li>
                <li>Obsterics</li>
                <li>Oncology</li>
                <li>Trauma-response</li>
                <li>Emergency Medicine</li>
                <li>Infectious Diseases</li>
              </ul>
            </div>
            <div className="dropdown_container_img">
              <img src="./assets/child_xray.png" alt="" />
              <a href="#" className="text-center mx-auto">
                Youtube
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Dropdown;
