import React from "react";
import Posts from "./components/Posts";
import Categories from "./components/Categories";
import AlltTags from "./components/AlltTags";

const page = () => {
  return (
    <div>
      <div className="bg-[#F4F0F8] py-[80px]  xl:px-[462px] font-inter">
        <div className="container text-center">
          <h1>Business</h1>
          <p className="body1 pt-[16px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
          <p className="cap3  pt-[32px]">Blog Business</p>
        </div>
      </div>

      {/* post list */}
      <div className=" container grid xl:grid-cols-3  grid-col-1 gap-[144px]  pt-[64px] ">
        <div className="  xl:col-span-2 ">
          <Posts />
        </div>
        <div>
          <Categories />
          <AlltTags />
        </div>
      </div>
    </div>
  );
};

export default page;
