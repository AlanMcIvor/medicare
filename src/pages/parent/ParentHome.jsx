import React from "react";
import Nav from "../components/Nav";
import { BiPlusMedical } from "react-icons/bi";
import { GiMedicines } from "react-icons/gi";
import { BiSolidInjection } from "react-icons/bi";
import { FiMessageSquare } from "react-icons/fi";

const ParentHome = () => {
  return (
    <>
      <Nav />
      <div className="wrapper max-w-[685px] mx-auto">
        <h1 className="app_heading text-center sm:text-6xl font-heading my-10 font-bold">
          Welcome <span classname="user_title_name text-[#91E3AA]">Jane</span>
        </h1>
        <p className="parent_alert text-center text-[34px] font-body">
          Your child has an upcoming appointment with <br />
          Dr Joe Bloggs in Radiology on{" "}
          <span className="text-[#91E3AA]">Wed 2nd April</span>
        </p>

        <div className="home_card_container bg-gray-100 p-3 my-5 grid grid-cols-2 gap-5">
          <div className="home_card_body flex gap-3 items-center bg-white min-w-[250px] max-w-[350px] rounded-lg shadow-lg text-[26px] cursor-pointer hover:translate-y-1 transition-transform">
            <div className="icon_container bg-[#1C3925] p-2">
              <BiPlusMedical size={50} color="white" />
            </div>
            <div className="text_container">Departments</div>
          </div>
          <div className="home_card_body flex gap-3 items-center bg-white min-w-[250px] max-w-[350px] rounded-lg shadow-lg text-[26px] cursor-pointer hover:translate-y-1 transition-transform">
            <div className="icon_container bg-[#1C3925] p-2">
              <GiMedicines size={50} color="white" />
            </div>
            <div className="text_container">Medication</div>
          </div>
          <div className="home_card_body flex gap-3 items-center bg-white min-w-[250px] max-w-[350px] rounded-lg shadow-lg text-[26px] cursor-pointer hover:translate-y-1 transition-transform">
            <div className="icon_container bg-[#1C3925] p-2">
              <BiSolidInjection size={50} color="white" />
            </div>
            <div className="text_container">Procedures</div>
          </div>
          <div className="home_card_body flex gap-3 items-center bg-white min-w-[250px] max-w-[350px] rounded-lg shadow-lg text-[26px] cursor-pointer hover:translate-y-1 transition-transform">
            <div className="icon_container bg-[#1C3925] p-2">
              <FiMessageSquare size={50} color="white" />
            </div>
            <div className="text_container">Messages</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ParentHome;
