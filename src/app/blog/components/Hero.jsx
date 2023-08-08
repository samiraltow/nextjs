import React from "react";
import Image from "next/image";
const Hero = () => {
  return (
    <div className=" bg-[#F4F0F8]">
      <div className="container">
        <div className=" grid grid-cols-1 xl:grid-cols-2 gap-[141px]  py-[80px]">
          <div>
            <p className="cap3 pb-[20px]">Featured Post</p>
            <h2>Step-by-step guide to choosing great font pairs</h2>
            <p className="text-black label1 pt-[16px]">
              By <span className="text-[#592EA9]">John Doe</span> l May 23, 2022
            </p>
            <p className="body1 pt-[16px] text-[#6D6E76]">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>
            <div className="pt-[32px]">
              <button className="btn hover:bg-yellow-500 bg-[#FFD050]">
                Read More {">"}
              </button>
            </div>
          </div>
          <div className="relative  w-full h-[359px] ">
            <Image src="/image/blog.png" fill alt="blog" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
