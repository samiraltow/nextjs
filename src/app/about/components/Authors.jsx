import React from "react";
import Author from "@/app/components/Author";
import { AuthorData } from "./AuthorData";
const Authors = () => {
  return (
    <div className="container pb-[128px]">
      <h2 className="pb-[48px] text-center font-bold">List of Authors</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 xl:grid-cols-4 gap-[32px]">
        {AuthorData.map((item, index) => {
          return <Author item={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Authors;
