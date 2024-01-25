import React from "react";

const Service = () => {
  return (
    <div className="bg-[#121121] pt-[4rem] md:pt-[8rem] pb-[5rem]">
      {/* heading  == global.css  */}
      <p className="heading">
        My <span className="text-yellow-400">Services</span>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white">
        <div>1ST</div>
        <div>2ST</div>
        <div>3ST</div>
      </div>
    </div>
  );
};

export default Service;
