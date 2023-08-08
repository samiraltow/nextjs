import React from "react";

const AlltTags = () => {
  return (
    <div>
      <div className="pt-[48px]  pb-[48px]">
        <h2>All Tags</h2>
        <div className="grid grid-cols-1 ">
          <div className="pt-[24px] flex  space-x-[16px] ">
            <button className="btn1 ">Business</button>
            <button className="btn1">Experience</button>
          </div>
          <div className="pt-[24px] flex space-x-[16px] ">
            <button className="btn1">Screen</button>
            <button className="btn1">Technology</button>
          </div>
          <div className="pt-[24px] flex space-x-[16px] ">
            <button className="btn1">Marketing</button>
            <button className="btn1">Life</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlltTags;
