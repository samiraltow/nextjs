import React from "react";
import Image from "next/image";
const Post = ({ item }) => {
  return (
    <div className=" flex  gap-[32px]   xl:flex-row  lg:flex-row flex-col">
      <div className=" lg:w-[490px] lg:h-[318px] w-full h-full  ">
        <img src={item.img.src} />
      </div>
      <div className=" ">
        <p className="cap1 xl:pt-[48px] ">{item?.title}</p>
        <h2 className="pt-[20px]">{item?.subtitle}</h2>
        <p className="body1 pt-[16px]">{item?.description}</p>
      </div>
    </div>
  );
};

export default Post;
