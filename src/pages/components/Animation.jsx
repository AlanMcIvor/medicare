import React from "react";

const Animation = () => {
  return (
    <>
      <div className="wrapper grid sm:grid-cols-3 align-center justify-center gap-2 mt-5">
        <div className="first relative group">
          <img src="../assets/reception.png" alt="" />
          <img
            className="absolute block bottom-0 left-3 origin-top max-h-[150px] opacity-0 group-hover:opacity-100 transition-opacity ease-in-out"
            src="../assets/kid.png"
            alt=""
          />
          <div class="absolute top-20 right-2 px-3.5 py-2 bg-gray-100 rounded-3xl rounded-tl-none justify-start items-center gap-3 inline-flex opacity-0 group-hover:opacity-100 transition-opacity ease-in delay-500">
            Arrive at hospital
          </div>
        </div>
        <div className="second relative group">
          <img src="../assets/arrival.png" alt="" />
          <img
            className="absolute block bottom-0 left-10 origin-top max-h-[150px] opacity-0 group-hover:opacity-100 transition-opacity ease-in-out"
            src="../assets/kid.png"
            alt=""
          />
          <div class="absolute top-5 right-2 px-3.5 py-2 bg-gray-100 rounded-3xl rounded-tl-none justify-start items-center gap-3 inline-flex opacity-0 group-hover:opacity-100 transition-opacity ease-in delay-500">
            Get checked in
          </div>
        </div>
        <div className="third relative group">
          <img src="../assets/xray.png" alt="" />
          <img
            className="absolute block bottom-4 right-12 origin-center max-h-[150px] rotate-90 opacity-0 group-hover:opacity-100 transition-opacity ease-in-out"
            src="../assets/kid.png"
            alt=""
          />
          <div class="absolute top-10 right-2 px-3.5 py-2 bg-gray-100 rounded-3xl rounded-tl-none justify-start items-center gap-3 inline-flex opacity-0 group-hover:opacity-100 transition-opacity ease-in delay-500">
            Get your x-ray
          </div>
        </div>
      </div>
    </>
  );
};

export default Animation;
