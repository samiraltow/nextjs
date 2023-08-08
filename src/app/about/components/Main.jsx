import React from "react";

const Main = () => {
  return (
    <div className="container">
      <div className="xl:hidden pt-[128px]">
        <p className="cap3">ABOUT US</p>
        <h1 className="text-[#232536] pt-[16px]">
          We are a team of content writers who share their learnings
        </h1>
        <div className="xl:hidden pt-[20px]">
          <p className="text-[#4C4C4C] body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      <div className="xl:pt-[373px] pt-11 relative">
        <div className="hidden xl:grid grid-cols-3 pl-[48.18px]">
          <div className="absolute w-[624px] h-[365px] xl:bg-white bottom-[387px] left-[109px] p-[64px]">
            <p className="cap3">ABOUT US</p>
            <h1 className="text-[#232536] pt-[16px]">
              We are a team of content writers who share their learnings
            </h1>
          </div>
          <div className="absolute w-[477px] h-[112px]  right-0 left-[780px] bottom-[516px] ">
            <p className="text-[#4C4C4C] body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <div className="absolute w-[630px] h-[156px] xl:bg-[#FFD050] left-[109px] top-[640px] ">
          <div className="hidden xl:grid grid-cols-3 pl-[48.18px]">
            <div className="py-[32px]">
              <p className="xl:display">12+</p>
              <p className="xl:body1 xl:text-[#232536]">Blogs Published</p>
            </div>
            <div className="py-[32px]">
              <p className="xl:display">18K+</p>
              <p className="xl:body1 xl:text-[#232536]">Views on Finsweet</p>
            </div>
            <div className="py-[32px]">
              <p className="xl:display">30K+</p>
              <p className="xl:body1 xl:text-[#232536]">Total active Users</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 container pl-[109px] pr-[309px] top-[795px] absolute">
          <div className="xl:bg-[#592EA9] h-[23px] col-span-1"></div>
          <div className="xl:bg-[#FFD050] h-[23px] col-span-2  "></div>
        </div>
        <div>
          <img src="/image/people.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Main;
