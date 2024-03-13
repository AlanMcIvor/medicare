import React from "react";

const Animation = () => {
  return (
    <>
      <div className="wrapper grid grid-cols-3 align-center justify-center gap-2 mt-5">
        <div className="first">
          <img src="../assets/reception.png" alt="" />
        </div>
        <div className="second">
          {" "}
          <img src="../assets/arrival.png" alt="" />
        </div>
        <div className="third">
          {" "}
          <img src="../assets/xray.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Animation;
