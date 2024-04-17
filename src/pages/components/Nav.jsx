import React from "react";
import { GiHospitalCross } from "react-icons/gi";
import { Link } from "react-router-dom";
import UserInfo from "./UserInfo";

const Nav = () => {
  const user = UserInfo();
  console.log(user);

  if (!user) {
    return <div className="text-center text-[60px] mx-auto">Loading...</div>;
  }
  return (
    <>
      <div className=" sm:container flex items-center justify-around md:justify-between mx-5 md:mx-auto my-5 font-heading md:max-w-[685px]">
        <Link to="/Profile">
          <div className="nav_profile">
            <div className="nav_location text-[#1C3925] text-[18px]">
              Glasgow childrens Hospital
            </div>
            <div className="nav_profile_details flex gap-5">
              <p className="pro_name text-[18px]">{` ${user.forename}`}</p>
              <img
                className="max-w-[50px] max-h-[30px] rounded-full cursor-pointer aspect-square"
                src={` ${user.profileImg}`}
                alt="profile image of the user"
              />
            </div>
          </div>{" "}
        </Link>
        <div className="icon">
          <GiHospitalCross size={50} />
        </div>
      </div>
    </>
  );
};

export default Nav;
