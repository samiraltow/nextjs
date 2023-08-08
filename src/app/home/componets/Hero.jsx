import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="  bg-[url(/image/hero.png)] relative  bg-cover  bg-center w-screen h-screen overflow-x-hidden mb-[128px]">
        <div className="clr w-full h-full">
          <div className="container">
            <div className=" pt-[128px] flex flex-col   lg:w-[804px]  ">
              <p className="navtext font-inter text-[16px] font-medium leading-[20px] tracking-[3px] uppercase">
                Posted on <span className="font-extrabold">startup</span>
              </p>
              <p className="display navtext pt-[24px]">
                Step-by-step guide to choosing great font pairs
              </p>
              <div className="">
                <p className="navtext body1 pt-[24px]">
                  By <span className="text-[#FFD050]">James West</span> | May
                  23, 2022
                </p>
                <p className="navtext body1 pt-[16px]">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident.
                </p>
              </div>
              <div className="pt-[48px]">
                <button className="btn hover:bg-yellow-500 bg-[#FFD050] ">
                  Read More {">"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
