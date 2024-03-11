import React from "react";

const DrCard = ({ profile, alt, name, role }) => {
  return (
    <>
      <div className="dr_card_body flex gap-2">
        <div className="dr_card_img">
          <img
            className=" max-h-[50px] rounded-full aspect-square"
            src={profile}
            alt={alt}
          />
        </div>
        <div className="dr_card_text font-body">
          <h4 className="dr_name">{name}</h4>
          <p className="dr_role font-bold">{role}</p>
        </div>
      </div>
    </>
  );
};

export default DrCard;
