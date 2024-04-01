import React, { useState } from "react";
import { FaRegArrowAltCircleDown } from "react-icons/fa";

const Dropdown = ({
  icon,
  name,
  intro,
  subtitle,
  aside,
  imgPath,
  imgAlt,
  listItems,
}) => {
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
        <div className="dropdown_text_container bg-[#F1F3F7] my-5 p-2 shadow-lg">
          <p className="dropdown_intro">{intro}</p>
          <div className="container grid grid-cols-2 gap-2 transition-all">
            <div className="aside">
              <h4 className="text-2xl my-3">{subtitle}</h4>
              <p>{aside}</p>
              <ul className="list-disc ml-8">
                {listItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="dropdown_container_img">
              <img src={imgPath} alt={imgAlt} />
              <a href="#" className="text-center mx-auto text-blue-600">
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
