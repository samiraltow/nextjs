import React from "react";
import Posts from "./components/Posts";
import Image from "next/image";
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
const page = () => {
  return (
    <div>
      <div className="bg-[#F4F0F8] ">
        <div className="container  flex justify-center items-center xl: lg:justify-start flex-col xl:flex-row lg:flex-row gap-[32px] py-[128px]  ">
          <div className="w-[251px] h-[294px] relative">
            <Image src="/image/author.png" fill />
          </div>
          <div>
            <h1>Hey there, I’m Andrew Jonhson and welcome to my Blog</h1>
            <p className="body1 pt-[24px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
              blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
              At risus viverra adipiscing at in tellus.
            </p>
            <div className="flex text-[#232536] space-x-2 pt-[24px]">
              <BsFacebook />
              <BsTwitter />
              <BsInstagram />
              <BsLinkedin />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 container">
          <div className="bg-[#FFD050] h-[16px] col-span-2"></div>
          <div className="bg-[#592EA9] h-[16px] col-span-1"></div>
        </div>
      </div>
      {/* all post */}
      <div className="pt-[128px]">
        <Posts />
      </div>
    </div>
  );
};

export default page;
