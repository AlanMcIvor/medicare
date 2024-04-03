import React from "react";
const ProcedureCard = ({ title }) => {
  return (
    <>
      <div className="border-t-8 border-[#91E3AA] shadow-lg rounded-lg bg-white text-center py-10 px-2 max-w-[150px] md:max-w-[250px] min-w-[150px] md:min-w-[250px]">
        <h6>{title}</h6>
      </div>
    </>
  );
};

export default ProcedureCard;
