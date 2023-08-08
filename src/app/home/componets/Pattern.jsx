import React from "react";

const Pattern = () => {
  return (
    <div>
      <div className="">
        <div className="   grid grid-cols-3 container pl-[299px]">
          <div className="bg-[#FFD050] h-[23px] col-span-2  "></div>
          <div className="bg-[#592EA9] h-[23px] col-span-1"></div>
        </div>
        <div className=" py-[96px]   px-[80px] grid md:grid-cols-2 grid-cols-1 gap-[82px] container bg-[#F4F0F8]">
          <div>
            <p className="cap1 text-[#232536] pb-[24px]">ABOUT US</p>
            <h2 className="tracking-[-0.5px]">
              We are a community of content writers who share their learnings
            </h2>
            <p className="pt-[16px] body1 text-[#6D6E76] pb-[16px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a
              href="/"
              className="  text-[#592EA9] font-sen text-[18px] font-bold leading-[32px]"
            >
              Read More {">"}
            </a>
          </div>
          <div>
            <p className="cap1 text-[#232536] pb-[24px]">OUR MISION</p>
            <h3 className="text-[#232536] pr-[143px] tracking-[-0.5px]">
              Creating valuable content for creatives all around the world
            </h3>
            <p className="pt-[16px] body1 text-[#6D6E76]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pattern;
