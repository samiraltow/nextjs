import React from "react";

const Logos = () => {
  return (
    <div className="container flex  justify-between pb-[20px] xl:pb-[0px] ">
      <div>
        <p className="body2 text-[#6D6E76]">We are</p>
        <h4 className="text-[#6D6E76]">Featured in</h4>
      </div>
      <div className="flex flex-col xl:flex-row space-x-[75px] h-[32px] ">
        <img src="/image/Logo 1.png" alt="" />
        <img src="/image/Logo 2.png" alt="" />
        <img src="/image/Logo 3.png" alt="" />
        <img src="/image/Logo 4.png" alt="" />
        <img src="/image/Logo 5.png" alt="" />
      </div>
    </div>
  );
};

export default Logos;
