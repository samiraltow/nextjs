import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="bg w-full xl:h-[560px]">
      <nav className="bg flex justify-between items-center h-32 p-4 container">
        <img src="image/Logo.png" alt="" />
        <div className="hidden xl:flex lg:flex md:flex gap-6">
          <ul className="flex gap-[24px] list-none  mt-[25px] mb-[25px]  text-gray-200">
            <Link href="/home">Home</Link> <Link href="/blog">Blog</Link>
            <Link href="/about">About Us</Link>
            <Link href="/contact">Contact Us</Link>
            <Link href="/privacy">Privacy Policy</Link>
          </ul>
        </div>
      </nav>
      <div className="bg-[#2E3040] container xl:h-[256px]">
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2  md:gap-40 pt-[80px] pl-[75px]  "> */}
        <div className="flex flex-col  lg:flex-row xl:flex-row  gap-[64px] py-[80px] px-[64px] ">
          <h2 className="text-[#FFF] ">
            Subscribe to our news letter to get latest updates and news
          </h2>
          <div className=" flex flex-col xl:flex-row lg:justify-center  gap-[24px]">
            <label htmlFor="Email">
              <input
                className="xl:w-[323px] xl:h-[56px]  px-[88px] py-[16px] border-2 border-gray-400 bg-[#2E3040]"
                type="text"
                name="Email"
                id="Email"
                placeholder="Enter Your Email"
                required
              ></input>
            </label>
            <button className="xl:w-[179px] xl:h-[56px] md:w-[179px]  px-[48px] py-[16px] text-[#232536] font-sen text-[18px] font-bold leading-[24px] hover:bg-yellow-500 bg-[#FFD050]">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="xl:pt-[80px] lg:pt-[80px] pt-[20px]  flex   flex-row   justify-between container">
        <div>
          <p className="body1">Finstreet 118 2561 Fintown</p>
          <p className="body1">Hello@finsweet.com 020 7993 2905</p>
        </div>
        <div className="flex flex-row px-6 gap-6 h-3 ">
          <img src="/image/facebook.png" alt="" />
          <img src="/image/twitter.png" alt="" />
          <img src="/image/instagram.png" alt="" />
          <img src="/image/linkdln.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
