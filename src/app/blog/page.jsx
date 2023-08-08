import React from "react";

import Hero from "./components/Hero";
import Posts from "./components/posts";
import Cards from "./components/Cards";
import Join from "./components/Join";

const page = () => {
  return (
    <div className="space-y-[64px]">
      {/* hero section */}
      <Hero />

      {/* Post section */}

      <Posts />

      <div className="container text-center  justify-center  flex gap-[17px]">
        <h3 className=" hover:text-[#232536] hover:text-[28px] text-[#6D6E76]">
          {"<"} Pre
        </h3>

        <h3 className=" hover:text-[#232536] hover:text-[28px] text-[#6D6E76]">
          Next {">"}
        </h3>
      </div>
      {/* Cards */}
      <Cards />

      {/* join */}

      <Join />
    </div>
  );
};

export default page;
