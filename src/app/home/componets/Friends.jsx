import React from "react";

const Friends = () => {
  return (
    <div>
      <div className=" container relative">
        <div className="xl:w-3/4 w-full">
          <img
            src="/image/close-up-photography-of-man-wearing-sunglasses-1212984.png"
            alt=""
          />
        </div>
        <div className=" xl:pl-[80px] py-[80px] bg-white xl:w-1/2 xl:absolute xl:top-24 xl:bottom-0 xl:right-0 xl:left-[574px] ">
          <p className="cap1 text-[#232536]  pb-[24px] ">Why we started</p>
          <h1 className="font-inter">
            It started out as a simple idea and evolved into <br />
            our passion
          </h1>
          <p className="pt-[16px] pb-[32px] body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip.
          </p>
          <div className=" ">
            <button className="btn   hover:bg-yellow-500 bg-[#FFD050]">
              Discover our story {">"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Friends;
