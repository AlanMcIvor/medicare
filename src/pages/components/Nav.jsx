import React from "react";
import { GiHospitalCross } from "react-icons/gi";

const Nav = () => {
  return (
    <>
      <div className=" sm:container flex items-center justify-around md:justify-between mx-5 md:mx-auto my-5 font-heading md:max-w-[685px]">
        <div className="nav_profile">
          <div className="nav_location text-[#1C3925] text-[18px]">
            Glasgow Childrens Hospital
          </div>
          <div className="nav_profile_details flex gap-5">
            <p className="pro_name text-[18px]">Jane Doe</p>
            <img
              className="max-w-[50px] max-h-[30px] rounded-full cursor-pointer aspect-square"
              src="https://plus.unsplash.com/premium_photo-1664870883044-0d82e3d63d99?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="profile image of the user"
            />
          </div>
        </div>
        <div className="hamburger">
          <GiHospitalCross size={50} />
        </div>
      </div>
    </>
  );
};

export default Nav;
