import React from "react";
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import Image from "next/image";
const Author = ({ item }) => {
  return (
    <div className="bg-[#F4F4F4] hover:bg-[#FBF6EA] border flex flex-col items-center p-[40px] ">
      <div className=" w-[128px] h-[128px] relative  ">
        <Image src={item.img.src} alt="" fill />
      </div>
      <h3 className="pt-[20px] text-[#232536]">{item?.title}</h3>
      <p className="text-center text-[#6D6E76]  body2">{item?.subtitle}</p>
      <div className="flex justify-center space-x-2 pt-[20px] text-[#232536]">
        <BsFacebook />
        <BsTwitter />
        <BsInstagram />
        <BsLinkedin />
      </div>
    </div>
  );
};

export default Author;
