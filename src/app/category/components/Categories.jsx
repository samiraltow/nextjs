import React from "react";

const Categories = () => {
  return (
    <div className="font-inter">
      <h2 className="pb-[28px]">Categories</h2>
      <div className="space-y-[24px]">
        <div className="flex gap-[13px] hover:bg-yellow-400 p-[24px] border  ">
          <img src="/image/Component 4.png" alt="" />
          <h3>Startup</h3>
        </div>
        <div className="flex gap-[13px] hover:bg-yellow-400 p-[24px] border">
          <img src="/image/business.png" alt="" />
          <h3>Business</h3>
        </div>
        <div className="flex gap-[13px] hover:bg-yellow-400 p-[24px] border">
          <img src="/image/economy.png" alt="" />
          <h3>Economy</h3>
        </div>
        <div className="flex gap-[13px] hover:bg-yellow-400 p-[24px] border">
          <img src="/image/tecnology.png" alt="" />
          <h3>Technology</h3>
        </div>
      </div>
    </div>
  );
};

export default Categories;
