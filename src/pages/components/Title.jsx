import React from "react";

const Title = ({ name, appointment, date }) => {
  return (
    <>
      <h1 className="app_heading text-center text-4xl sm:text-6xl font-heading my-10 font-bold">
        Welcome <span className="parent_title_name text-[#91E3AA]">{name}</span>
      </h1>
      <p className="parent_alert text-center text-[20px] sm:text-[34px] font-body">
        {appointment}
        <span className="text-[#91E3AA]">{date}</span>
      </p>
    </>
  );
};

export default Title;
