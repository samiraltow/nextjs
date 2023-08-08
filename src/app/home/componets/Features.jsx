import React from "react";

const Features = () => {
  return (
    <div className=" container">
      <div className=" flex lg:flex-row flex-col  gap-[32px] ">
        <div>
          <h2 className="font-bold pb-[32px]">Featured Post</h2>
          <div className="bb pl-[32px] pr-[32px]  pt-[32px]">
            <img
              src="/image/white-concrete-building-1838640.png"
              className="w-full"
              alt=""
            />
            <p className="pt-[32px] label1">
              By <span className="text-[#592EA9]">John Doe</span> l May 23, 2022
            </p>
            <div className=" ">
              <h3 className="pt-[16px] text-[#232536] ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </h3>
              <p className="pt-[16px] body1">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident.
              </p>
            </div>
            <div className="pt-[32px] pb-[32px] ">
              <button className="btn font-sen hover:bg-yellow-500 bg-[#FFD050]">
                Read More {">"}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className=" flex justify-between mb-[32px]">
            <h2 className="font-bold">All Posts</h2>
            <a href="/" className="text-[#592EA9]">
              View All
            </a>
          </div>

          <div className="p-[40px] hover:bg-[#FBF6EA]  ">
            <p className="label1">
              By <span className="label1 text-[#592EA9]">John Deo</span> l Aug
              23, 2021
            </p>
            <h4 className="pt-[8px] ">
              8 Figma design systems that you can download for free today.
            </h4>
          </div>
          <div className="p-[40px] hover:bg-[#FBF6EA]  ">
            <p className=" label1 ">
              By <span className="label1 text-[#592EA9]">John Deo</span> l Aug
              23, 2021
            </p>
            <h4 className="pt-[8px] ">
              8 Figma design systems that you can download for free today.
            </h4>
          </div>
          <div className="p-[40px] hover:bg-[#FBF6EA] ">
            <p className="label1  ">
              By <span className="label1 text-[#592EA9]">John Deo</span> l Aug
              23, 2021
            </p>
            <h4 className="pt-[8px] ">
              8 Figma design systems that you can download for free today.
            </h4>
          </div>
          <div className="p-[56px]  hover:bg-[#FBF6EA] ">
            <p className="label1  ">
              By <span className="label1 text-[#592EA9]">John Deo</span> l Aug
              23, 2021
            </p>
            <h4 className="pt-[8px] ">
              8 Figma design systems that you can download for free today.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
