import React from "react";
import UserInfo from "./UserInfo"

const Title = ({ name, appointment, date, dep }) => {
  return (
    <>
      <h1 className="app_heading  text-4xl sm:text-6xl font-heading my-10 font-bold">
        Welcome <span className="parent_title_name text-[#91E3AA]">{name}</span>
      </h1>
      <p className="parent_alert text-[20px] sm:text-[34px] font-body mx-3">
        {appointment}
        <span className="text-[#91E3AA]">{date}</span>
       <p>{dep}</p>
      </p>
    </>
  );
};

export default Title;
