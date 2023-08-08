import React from "react";

const page = () => {
  return (
    <div className="container">
      <div className="text-center px-10 xl:px-0 lg:px-0 xl:w-[768px] lg:w-[768px] mx-auto ">
        <p className="text-center cap3  pt-[128px]">Contact us</p>
        <h1 className="pt-[12px]">Let’s Start a Conversation</h1>
        <p className="pt-[24px] pb-[64px] body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim.
        </p>
      </div>

      <div className=" bg-[#592EA9]  xl:w-[768px] lg:w-[768px]  mx-auto ">
        <div className="grid grid-cols-1  xl:grid-cols-2 lg:grid-cols-2 gap-[42px] px-[64px] py-[48px]  ">
          <div>
            <p className="body2 font-inter pb-[16px]">Working hours</p>
            <hr />
            <h5 className=" pt-[32px]">Monday To Friday</h5>
            <h5>9:00 AM to 8:00 PM </h5>
            <p className="body1 text-[#FFF] opacity-[0.6000000238418579]">
              Our Support Team is available 24/7
            </p>
          </div>
          <div>
            <p className="body2 font-inter pb-[16px]">Contact Us</p>
            <hr />
            <h5 className="text-white pt-[32px]">020 7993 2905</h5>
            <p className="body1 text-[#FFF] opacity-[0.6000000238418579]">
              hello@finsweet.com
            </p>
          </div>
        </div>
      </div>
      <div className=" pt-[32px]">
        <div className="xl:w-[768px] lg:w-[768px]  mx-auto  ">
          <form className="grid grid-cols-1 gap-[16px] text-[#232536] pb-[128px]">
            <input
              className=" border-2 w-full px-[14px]  py-[20px] bg-white  space-x-[32px] body1 "
              type="text"
              placeholder="Full Name"
              id="fullname-input"
            />

            <input
              className="border-2 w-full px-[14px]  py-[20px] bg-white body1  "
              type="text"
              placeholder="Your Email"
              id="fullname-input"
            />

            <select className="border-2 w-full px-[14px]  py-[20px] bg-white body1 text-[#232536] ">
              <option value="Query">Query Related </option>
            </select>

            <textarea className="border-2 w-full px-[14px]  py-[20px] bg-white body1 text-[#232536] ">
              Message
            </textarea>

            <button
              className="btn2 w-full hover:bg-yellow-500 bg-[#FFD050] "
              type="submit"
            >
              Sent Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
