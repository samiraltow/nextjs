import React from "react";
import Image from "next/image";
const Read = () => {
  return (
    <div>
      <h2 className="pb-[64px]">What to read next</h2>
      <div className=" grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-[32px] pb-[64px]">
        <div>
          <div className="relative w-full h-[318px]">
            <Image src="/image/img1.png" fill />
          </div>
          <p className="pt-[32px] label1">
            By <span className="text-purple-800">John Doe </span> l Aug 23, 2021{" "}
          </p>
          <h3 className="pt-[16px] text-[#232536]">
            A UX Case Study Creating a Studious Environment for Students:{" "}
          </h3>
          <p className="body1 pt-[16px] text-[#232536]">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident.
          </p>
        </div>

        <div>
          <div className="relative w-full h-[318px]">
            <Image src="/image/img2.png" fill />
          </div>
          <p className="pt-[32px] label1">
            By <span className="text-purple-800">John Doe </span> l Aug 23, 2021{" "}
          </p>
          <h3 className="pt-[16px] text-[#232536]">
            A UX Case Study Creating a Studious Environment for Students:{" "}
          </h3>
          <p className="body1 pt-[16px] text-[#232536]">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident.
          </p>
        </div>

        <div>
          <div className="relative w-full h-[318px]">
            <Image src="/image/img3.png" fill />
          </div>
          <p className="pt-[32px] label1">
            By <span className="text-purple-800">John Doe </span> l Aug 23, 2021{" "}
          </p>
          <h3 className="pt-[16px] text-[#232536]">
            A UX Case Study Creating a Studious Environment for Students:{" "}
          </h3>
          <p className="body1 pt-[16px] text-[#232536]">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident.
          </p>
        </div>
      </div>

      <hr className="pb-[128px]" />
    </div>
  );
};

export default Read;
