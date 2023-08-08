import React from "react";

const Post = ({ item }) => {
  return (
    <div className=" flex  gap-[32px]  lg:pb-[64px] xl:pb-[64px] xl:flex-row  lg:flex-row flex-col">
      <div className=" w-full h-full">
        <img src={item.img.src} />
      </div>
      <div className=" ">
        <p className="cap1 ">{item?.title}</p>
        <h2 className="pt-[20px]">{item?.subtitle}</h2>
        <p className="body1 pt-[16px]">{item?.description}</p>
      </div>
    </div>
  );
};

export default Post;
