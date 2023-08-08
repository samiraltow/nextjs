import React from "react";
import Image from "next/image";
const Hands = () => {
  return (
    <div className="pb-[128px]">
      <div className="container pt-[128px]">
        <div className="  grid lg:grid-cols-2 xl:grid-cols-2  grid-cols-1 xl:gap-[137px] lg:gap-[137px] gap-10">
          <div className="xl:py-[96px] lg:py-[96px]">
            <h2 className="text-[#232536]">Our team of creatives</h2>
            <h4 className="pt-[16px] text-[#232536]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </h4>
            <p className="body1 pt-[16px] text-[#232536]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat.
            </p>
          </div>
          <div>
            <div className="relative ">
              <div className="xl:w-[103px] xl:h-[116px]  xl:absolute xl:rounded-tl-3xl xl:bg-[#FFD050] xl:top-[114px] xl:right-[500px]"></div>

              <img
                src="/image/hands.jpg"
                className="lg:w-[624px] lg:h-[480px] w-full h-full "
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container pt-[128px] ">
        <div className=" grid lg:grid-cols-2 xl:grid-cols-2  grid-cols-1 xl:gap-[64px] lg:gap-[64px] gap-10">
          <div>
            <div className="relative ">
              <div className="xl:w-[74px] xl:h-[74px]  xl:absolute xl:rounded-full xl:bg-[#592EA9] xl:top-[443px] xl:left-[107px]"></div>

              <img
                src="/image/persons.png"
                className="lg:w-[624px] lg:h-[480px] w-full h-full "
                alt=""
              />
            </div>
          </div>

          {/* conten  */}
          <div className="xl:py-[96px] lg:py-[96px]">
            <h2 className="text-[#232536]">Why we started this Blog</h2>
            <h4 className="pt-[16px] text-[#232536]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </h4>
            <p className="body1 pt-[16px] text-[#232536]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hands;
