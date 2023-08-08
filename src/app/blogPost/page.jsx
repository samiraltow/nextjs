import React from "react";

import Content from "./components/content";
import Join from "../home/componets/Join";
import Read from "./components/Read";
const page = () => {
  return (
    <div className="container  pt-[128px] font-inter ">
      <div className="flex flex-col xl:px-[208px]">
        <div className="flex  gap-[16px] ">
          <div className="w-[48px] h-[48px]">
            <img src="/image/Profile picture.png" alt="" />
          </div>
          <div>
            <h3 className="text-[#592EA9]">Andrew Jonson</h3>
            <p className="body1">Posted on 27th January 2022</p>
          </div>
        </div>
        <h1 className="pt-[24px]">
          Step-by-step guide to choosing great font pairs
        </h1>
        <div className="flex pt-[34px] gap-1">
          <img src="/image/shuttle.png" alt="" />
          <h4>Startup</h4>
        </div>
      </div>

      {/* content  */}
      <Content />

      {/* read  */}
      <Read />

      {/* join now  */}

      <Join />
    </div>
  );
};

export default page;
